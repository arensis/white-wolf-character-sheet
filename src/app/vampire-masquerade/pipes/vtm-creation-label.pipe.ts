import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const PREFIXES: Record<string, string> = {
  clan: 'creationVtm.clans.',
  path: 'creationVtm.paths.',
  archetype: 'creationVtm.archetypeNames.',
  specialty: 'creationVtm.specialtyNames.',
  weakness: 'creationVtm.clanWeakness.',
  sect: 'creationVtm.sects.',
};

/**
 * V20 flavour of the DA creationLabel pipe: translates stored creation ids
 * (clan/path/archetype/weakness) using the creationVtm.* i18n namespace.
 * Impure so it re-evaluates on language change.
 */
@Pipe({ name: 'vtmCreationLabel', pure: false })
export class VtmCreationLabelPipe implements PipeTransform {
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
    return category === 'weakness' ? '' : this.capitalize(value);
  }

  private capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
