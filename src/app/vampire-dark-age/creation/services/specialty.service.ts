import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  getAbilitySpecialties,
  getExperienceFields,
  isGenericAbility,
} from '../data/specialties.data';
import { CreationDialogService } from './creation-dialog.service';
import { CreationStateService } from './creation-state.service';

/**
 * Ability specialties and experience fields (Edad Oscura). Both grant +1 die.
 * Specialties: up to 3 per ability, 1 freebie each, only one applies per roll.
 * Experience fields (generic abilities only): up to the ability's dots, first
 * free then 1 freebie each, can combine with a specialty (+2 max).
 */
@Injectable()
export class SpecialtyService {
  constructor(
    private state: CreationStateService,
    private dialogs: CreationDialogService,
    private translate: TranslateService
  ) {}

  has(member: string): boolean {
    return getAbilitySpecialties(member).length > 0;
  }

  isGeneric(member: string): boolean {
    return isGenericAbility(member);
  }

  /** Multi-select modal to toggle an ability's specialties (finishing step). */
  manage(member: string): void {
    const all = getAbilitySpecialties(member);
    if (!all.length) {
      return;
    }
    if (!this.state.specialties[member]) {
      this.state.specialties[member] = [];
    }
    this.dialogs.openInfo({
      title: this.abilityName(member) + ' — ' + this.translate.instant('creation.specialtyChoose'),
      body: this.translate.instant('creation.specialtyWhat'),
      items: all.map((name) => ({ id: name, name })),
      multiSelect: true,
      selectedIds: this.state.specialties[member],
      onToggle: (name) => this.state.toggleSpecialty(member, name),
    });
  }

  /** Multi-select modal to toggle a generic ability's experience fields. */
  manageExperience(member: string): void {
    const all = getExperienceFields(member);
    if (!all.length) {
      return;
    }
    if (!this.state.experiences[member]) {
      this.state.experiences[member] = [];
    }
    this.dialogs.openInfo({
      title: this.abilityName(member) + ' — ' + this.translate.instant('creation.experienceChoose'),
      body: this.translate.instant('creation.experienceWhat'),
      items: all.map((name) => ({ id: name, name })),
      multiSelect: true,
      selectedIds: this.state.experiences[member],
      onToggle: (name) => this.state.toggleExperience(member, name),
    });
  }

  /** Read-only modal listing the specialties and experience for an ability. */
  showChosenFor(
    member: string,
    specialties?: Record<string, string[]>,
    experiences?: Record<string, string[]>
  ): void {
    const specs = specialties?.[member] ?? [];
    const exps = experiences?.[member] ?? [];
    if (!specs.length && !exps.length) {
      return;
    }
    const lines: string[] = [];
    if (specs.length) {
      lines.push(this.translate.instant('creation.specialtyChosenTitle') + ': ' + specs.join(' · '));
    }
    if (exps.length) {
      lines.push(this.translate.instant('creation.experienceChosenTitle') + ': ' + exps.join(' · '));
    }
    this.dialogs.openInfo({
      title: this.abilityName(member),
      body: lines.join('\n'),
    });
  }

  private abilityName(member: string): string {
    return this.translate.instant('creation.abilityNames.' + member);
  }
}
