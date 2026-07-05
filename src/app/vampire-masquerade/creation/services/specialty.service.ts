import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getSpecialtySuggestions } from '../data/specialties.data';
import { CreationDialogService } from './creation-dialog.service';
import { CreationStateService } from './creation-state.service';

/**
 * Trait specialties (V20 Mascarada). A specialty can be taken for any Attribute
 * or Ability rated 4+, one per trait, free at creation. There are no experience
 * fields (that is an Edad Oscura mechanic). On a covered roll, each 10 counts
 * as two successes.
 */
@Injectable()
export class SpecialtyService {
  constructor(
    private state: CreationStateService,
    private dialogs: CreationDialogService,
    private translate: TranslateService
  ) {}

  /** Whether the trait (attribute or ability) has suggested specialties. */
  has(member: string): boolean {
    return getSpecialtySuggestions(member).length > 0;
  }

  /** Single-select modal to set/clear a trait's specialty (finishing step). */
  manage(member: string, nameKeyPrefix: string): void {
    const all = getSpecialtySuggestions(member);
    if (!all.length) {
      return;
    }
    if (!this.state.specialties[member]) {
      this.state.specialties[member] = [];
    }
    this.dialogs.openInfo({
      title:
        this.traitName(member, nameKeyPrefix) +
        ' — ' +
        this.translate.instant('creation.specialtyChoose'),
      body: this.translate.instant('creationVtm.specialtyWhat'),
      items: all.map((name) => ({ id: name, name })),
      multiSelect: true,
      selectedIds: this.state.specialties[member],
      onToggle: (name) => this.state.toggleSpecialty(member, name),
    });
  }

  /** Read-only modal listing the specialty chosen for a trait (sheet view). */
  showChosenFor(member: string, specialties?: Record<string, string[]>): void {
    const specs = specialties?.[member] ?? [];
    if (!specs.length) {
      return;
    }
    this.dialogs.openInfo({
      title: this.traitName(member),
      body:
        this.translate.instant('creation.specialtyChosenTitle') +
        ': ' +
        specs.join(' · '),
    });
  }

  /** Resolves a trait's display name; abilities fall back to the ability list. */
  private traitName(member: string, nameKeyPrefix?: string): string {
    if (nameKeyPrefix) {
      const key = nameKeyPrefix + member;
      const label = this.translate.instant(key);
      if (label && label !== key) {
        return label;
      }
    }
    const abilityKey = 'creationVtm.abilityNames.' + member;
    const ability = this.translate.instant(abilityKey);
    if (ability && ability !== abilityKey) {
      return ability;
    }
    const attrKey = 'creation.attributeNames.' + member;
    const attr = this.translate.instant(attrKey);
    return attr && attr !== attrKey ? attr : member;
  }
}
