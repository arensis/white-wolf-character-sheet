import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const PREFIXES: Record<string, string> = {
  clan: 'creation.clans.',
  path: 'creation.paths.',
  archetype: 'creation.archetypeNames.',
  specialty: 'creation.specialtyNames.',
  weakness: 'creation.clanWeakness.',
};

/**
 * Translates a stored creation key (clan/road/archetype/specialty/weakness id)
 * into the label for the current language, capitalising the first letter.
 *
 * Impure so it re-evaluates on language change. Falls back to the raw value
 * (capitalised) for free-text entries; for `weakness` an unknown key yields ''.
 */
@Pipe({ name: 'creationLabel', pure: false })
export class CreationLabelPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(value: string | undefined | null, category: string): string {
    if (!value) {
      return '';
    }
    const prefix = PREFIXES[category];
    if (!prefix) {
      return value;
    }
    const key = prefix + value;
    const translated = this.translate.instant(key);
    if (translated && translated !== key) {
      return translated;
    }
    // Key not found: free-text value (or no weakness for a homebrew clan).
    return category === 'weakness' ? '' : this.capitalize(value);
  }

  private capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
