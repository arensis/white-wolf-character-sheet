import { Injectable } from '@angular/core';
import { VampireMasqueradeSheetBuilder } from 'src/app/vampire-masquerade/model/masquerade-sheet/vampire-masquerade/VampireMasqueradeSheetBuilder';
import { cloneDeep } from 'lodash';
import { VampireMasqueradeSheet } from '../../model/masquerade-sheet/vampire-masquerade/VampireMasqueradeSheet';
import {
  ABILITY_POINTS,
  ATTRIBUTE_BASE,
  ATTRIBUTE_POINTS,
  BACKGROUND_POINTS,
  DISCIPLINE_POINTS,
  FREEBIE_COSTS,
  FREEBIE_POINTS,
  FreebieCategory,
  MAX_ABILITY_IN_CREATION,
  MAX_TRAIT,
  MIN_ATTRIBUTE,
  Priority,
  VIRTUE_BASE,
  VIRTUE_POINTS,
} from '../data/creation-rules';
import {
  AbilityGroupId,
  ATTRIBUTE_GROUPS,
  ABILITY_GROUPS,
  AttributeGroupId,
  BACKGROUNDS,
} from '../data/traits.data';
import { ClanData, DisciplineKey, getClan } from '../data/clans.data';
import { sectForClanType } from '../data/sects.data';
import { getPath, PathData } from '../data/paths.data';
import { getDisciplineContent } from '../data/disciplines-content.data';
import {
  generationFromBackground,
  generationInfo,
  GenerationInfo,
} from '../data/generation.data';
import { MAX_SPECIALTIES_PER_TRAIT } from '../data/specialties.data';

/** A specialty can only be taken for an attribute or ability rated this high. */
const SPECIALTY_MIN_RATING = 4;
import { getLanguageName } from '../data/languages.data';

/** Freebie cost per extra language (the V20 Language Merit is 1 pt each). */
const LANGUAGE_FREEBIE_COST = 1;
import { getMeritFlaw, MeritFlawType } from '../data/merits-flaws.data';

export const CREATION_STEPS = [
  'concept',
  'attributes',
  'abilities',
  'advantages',
  'finishing',
] as const;
export type CreationStep = typeof CREATION_STEPS[number];

@Injectable()
export class CreationStateService {
  draft!: VampireMasqueradeSheet;

  attributePriority: Record<AttributeGroupId, Priority | null> = {
    physical: null,
    social: null,
    mental: null,
  };
  abilityPriority: Record<AbilityGroupId, Priority | null> = {
    talents: null,
    skills: null,
    knowledges: null,
  };

  clanId = '';
  pathId = '';

  /** Chosen specialty per trait member (one each, for attributes/abilities
   * rated 4+; free at creation). */
  specialties: Record<string, string[]> = {};

  /** Kept empty in Masquerade (no experience fields); written blank to the
   * sheet so the shared model stays consistent. */
  experiences: Record<string, string[]> = {};

  /** Free native language and the additional languages (ids) granted by
   * Linguistics. */
  nativeLanguage = '';
  selectedLanguages: string[] = [];

  /** For a magic-discipline clan (Tremere/Cappadocian): chosen primary path
   * (senda) name and starting ritual name. */
  magicPath = '';
  magicRitual = '';

  /** Selected merits and flaws by the player. */
  selectedMeritsFlaws: { id: string; type: MeritFlawType; cost: number }[] = [];

  /** Snapshot of the draft taken when the finishing/freebie step begins. */
  private freebieBaseline: VampireMasqueradeSheet | null = null;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.draft = new VampireMasqueradeSheetBuilder().build();
    this.attributePriority = { physical: null, social: null, mental: null };
    this.abilityPriority = { talents: null, skills: null, knowledges: null };
    this.clanId = '';
    this.pathId = '';
    this.specialties = {};
    this.experiences = {};
    this.nativeLanguage = '';
    this.selectedLanguages = [];
    this.magicPath = '';
    this.magicRitual = '';
    this.selectedMeritsFlaws = [];
    this.freebieBaseline = null;
  }

  /** The clan's magic discipline key (Thaumaturgy/Mortis), if any. */
  get magicDisciplineKey(): DisciplineKey | '' {
    return (
      this.clanDisciplineKeys.find((key) => !!getDisciplineContent(key)?.paths) ?? ''
    );
  }

  // ----- Generation ---------------------------------------------------------

  /** Generation derived live from the Generation background dots. */
  get generation(): number {
    return generationFromBackground(this.getBackground('generation'));
  }

  get generationInfo(): GenerationInfo {
    return generationInfo(this.generation);
  }

  // ----- Concept ------------------------------------------------------------

  get clan(): ClanData | undefined {
    return getClan(this.clanId);
  }

  get path(): PathData | undefined {
    return getPath(this.pathId);
  }

  selectClan(id: string): void {
    this.clanId = id;
    this.magicPath = '';
    this.magicRitual = '';
    const disciplines = this.draft.disciplines as any;
    // Reset every "in blood" flag, then mark the chosen clan's disciplines.
    Object.keys(disciplines).forEach((key) => {
      disciplines[key].inBlood = false;
      disciplines[key].level = 0;
    });
    this.clanDisciplineKeys.forEach((key) => {
      disciplines[key].inBlood = true;
    });
  }

  get clanDisciplineKeys(): DisciplineKey[] {
    return this.clan?.disciplines ?? [];
  }

  isRecommendedAttributeGroup(groupId: AttributeGroupId): boolean {
    return (this.clan?.recommendedAttributeGroups ?? []).includes(groupId);
  }

  isRecommendedAbilityGroup(groupId: AbilityGroupId): boolean {
    return (this.clan?.recommendedAbilityGroups ?? []).includes(groupId);
  }

  isRecommendedBackground(key: string): boolean {
    return (this.clan?.recommendedBackgrounds ?? []).includes(key);
  }

  // ----- Attributes ---------------------------------------------------------

  setAttributePriority(group: AttributeGroupId, priority: Priority): void {
    this.assignUniquePriority(this.attributePriority, group, priority);
  }

  attributeSpent(group: AttributeGroupId): number {
    return this.groupMembers(ATTRIBUTE_GROUPS, group).reduce(
      (sum, member) =>
        sum + (this.getTrait('attributes', group, member) - ATTRIBUTE_BASE),
      0
    );
  }

  attributePool(group: AttributeGroupId): number {
    const priority = this.attributePriority[group];
    return priority ? ATTRIBUTE_POINTS[priority] : 0;
  }

  attributeRemaining(group: AttributeGroupId): number {
    return this.attributePool(group) - this.attributeSpent(group);
  }

  canRaiseAttribute(group: AttributeGroupId, member: string): boolean {
    return (
      this.attributePriority[group] !== null &&
      this.attributeRemaining(group) > 0 &&
      this.getTrait('attributes', group, member) < MAX_TRAIT
    );
  }

  getAttribute(group: AttributeGroupId, member: string): number {
    return this.getTrait('attributes', group, member);
  }

  setAttribute(group: AttributeGroupId, member: string, value: number): void {
    const current = this.getTrait('attributes', group, member);
    const clamped = Math.max(MIN_ATTRIBUTE, Math.min(MAX_TRAIT, value));
    const delta = clamped - current;
    if (delta > 0 && delta > this.attributeRemaining(group)) {
      return;
    }
    this.setTrait('attributes', group, member, clamped);
  }

  // ----- Abilities ----------------------------------------------------------

  setAbilityPriority(group: AbilityGroupId, priority: Priority): void {
    this.assignUniquePriority(this.abilityPriority, group, priority);
  }

  abilitySpent(group: AbilityGroupId): number {
    return this.groupMembers(ABILITY_GROUPS, group).reduce(
      (sum, member) => sum + this.getTrait('abilities', group, member),
      0
    );
  }

  abilityPool(group: AbilityGroupId): number {
    const priority = this.abilityPriority[group];
    return priority ? ABILITY_POINTS[priority] : 0;
  }

  abilityRemaining(group: AbilityGroupId): number {
    return this.abilityPool(group) - this.abilitySpent(group);
  }

  getAbility(group: AbilityGroupId, member: string): number {
    return this.getTrait('abilities', group, member);
  }

  setAbility(group: AbilityGroupId, member: string, value: number): void {
    const current = this.getTrait('abilities', group, member);
    const clamped = Math.max(0, Math.min(MAX_ABILITY_IN_CREATION, value));
    const delta = clamped - current;
    if (delta > 0 && delta > this.abilityRemaining(group)) {
      return;
    }
    this.setTrait('abilities', group, member, clamped);
  }

  // ----- Disciplines --------------------------------------------------------

  disciplineSpent(): number {
    return this.clanDisciplineKeys.reduce(
      (sum, key) => sum + (this.draft.disciplines as any)[key].level,
      0
    );
  }

  disciplineRemaining(): number {
    return DISCIPLINE_POINTS - this.disciplineSpent();
  }

  getDiscipline(key: DisciplineKey): number {
    return (this.draft.disciplines as any)[key].level;
  }

  setDiscipline(key: DisciplineKey, value: number): void {
    const current = this.getDiscipline(key);
    const clamped = Math.max(0, Math.min(MAX_TRAIT, value));
    const delta = clamped - current;
    if (delta > 0 && delta > this.disciplineRemaining()) {
      return;
    }
    (this.draft.disciplines as any)[key].level = clamped;
  }

  // ----- Backgrounds --------------------------------------------------------

  backgroundSpent(): number {
    return BACKGROUNDS.reduce(
      (sum, key) => sum + (this.draft.advantages.backgrounds as any)[key],
      0
    );
  }

  backgroundRemaining(): number {
    return BACKGROUND_POINTS - this.backgroundSpent();
  }

  getBackground(key: string): number {
    return (this.draft.advantages.backgrounds as any)[key];
  }

  setBackground(key: string, value: number): void {
    const current = this.getBackground(key);
    const clamped = Math.max(0, Math.min(MAX_TRAIT, value));
    const delta = clamped - current;
    if (delta > 0 && delta > this.backgroundRemaining()) {
      return;
    }
    (this.draft.advantages.backgrounds as any)[key] = clamped;
  }

  // ----- Virtues ------------------------------------------------------------

  private get virtueKeys(): string[] {
    return ['conscienceConviction', 'selfControlInstint', 'courage'];
  }

  virtueSpent(): number {
    return this.virtueKeys.reduce(
      (sum, key) =>
        sum + ((this.draft.advantages.virtues as any)[key] - VIRTUE_BASE),
      0
    );
  }

  virtueRemaining(): number {
    return VIRTUE_POINTS - this.virtueSpent();
  }

  getVirtue(key: string): number {
    return (this.draft.advantages.virtues as any)[key];
  }

  setVirtue(key: string, value: number): void {
    const current = this.getVirtue(key);
    const clamped = Math.max(VIRTUE_BASE, Math.min(MAX_TRAIT, value));
    const delta = clamped - current;
    if (delta > 0 && delta > this.virtueRemaining()) {
      return;
    }
    (this.draft.advantages.virtues as any)[key] = clamped;
  }

  // ----- Freebies -----------------------------------------------------------

  /**
   * Drops the freebie baseline so it is re-snapshotted next time the finishing
   * step is entered. Called when the player navigates back to an earlier step,
   * since changing core points there would make the old baseline stale.
   */
  invalidateFreebies(): void {
    this.freebieBaseline = null;
  }

  beginFreebies(): void {
    // Capture the baseline once, when the player first reaches this step.
    if (!this.freebieBaseline) {
      // Lock in derived starting values before freebies can change them.
      this.draft.advantages.path.level = this.roadFromVirtues();
      this.draft.advantages.willpower.permanent = this.getVirtue('courage');
      this.freebieBaseline = cloneDeep(this.draft);
    }
  }

  private roadFromVirtues(): number {
    return (
      this.getVirtue('conscienceConviction') +
      this.getVirtue('selfControlInstint')
    );
  }

  freebieSpent(): number {
    if (!this.freebieBaseline) {
      return 0;
    }
    const base = this.freebieBaseline;
    let cost = 0;

    ATTRIBUTE_GROUPS.forEach((g) =>
      g.members.forEach((m) => {
        cost +=
          this.freebieDelta(
            (this.draft.attributes as any)[g.id][m],
            (base.attributes as any)[g.id][m]
          ) * FREEBIE_COSTS.attribute;
      })
    );
    ABILITY_GROUPS.forEach((g) =>
      g.members.forEach((m) => {
        cost +=
          this.freebieDelta(
            (this.draft.abilities as any)[g.id][m],
            (base.abilities as any)[g.id][m]
          ) * FREEBIE_COSTS.ability;
      })
    );
    Object.keys(this.draft.disciplines).forEach((key) => {
      cost +=
        this.freebieDelta(
          (this.draft.disciplines as any)[key].level,
          (base.disciplines as any)[key].level
        ) * FREEBIE_COSTS.discipline;
    });
    BACKGROUNDS.forEach((key) => {
      cost +=
        this.freebieDelta(
          (this.draft.advantages.backgrounds as any)[key],
          (base.advantages.backgrounds as any)[key]
        ) * FREEBIE_COSTS.background;
    });
    this.virtueKeys.forEach((key) => {
      cost +=
        this.freebieDelta(
          (this.draft.advantages.virtues as any)[key],
          (base.advantages.virtues as any)[key]
        ) * FREEBIE_COSTS.virtue;
    });
    cost +=
      this.freebieDelta(
        this.draft.advantages.path.level,
        base.advantages.path.level
      ) * FREEBIE_COSTS.path;
    cost +=
      this.freebieDelta(
        this.draft.advantages.willpower.permanent,
        base.advantages.willpower.permanent
      ) * FREEBIE_COSTS.willpower;

    // Specialties are free at creation in V20 (a benefit of rating 4+), so
    // they add nothing to the freebie cost.

    // Extra languages: each is a point of the Language Merit.
    cost += this.languageFreebieCost();

    // Merits cost freebies directly.
    cost += this.meritCostTotal();

    return cost;
  }

  private freebieDelta(current: number, base: number): number {
    return Math.max(0, current - base);
  }

  /** Total cost of all selected merits (positive number). */
  meritCostTotal(): number {
    return this.selectedMeritsFlaws
      .filter((e) => e.type === 'merit')
      .reduce((sum, e) => sum + e.cost, 0);
  }

  /** Total points returned by selected flaws. */
  flawBonusTotal(): number {
    return this.selectedMeritsFlaws
      .filter((e) => e.type === 'flaw')
      .reduce((sum, e) => sum + e.cost, 0);
  }

  /** Effective pool: base points + flaw bonuses. */
  freebiePool(): number {
    return FREEBIE_POINTS + this.flawBonusTotal();
  }

  freebieRemaining(): number {
    return this.freebiePool() - this.freebieSpent();
  }

  isMeritFlawSelected(id: string): boolean {
    return this.selectedMeritsFlaws.some((e) => e.id === id);
  }

  toggleMeritFlaw(id: string): void {
    const index = this.selectedMeritsFlaws.findIndex((e) => e.id === id);
    if (index >= 0) {
      this.selectedMeritsFlaws.splice(index, 1);
      // Dropping the Language Merit clears any chosen languages (and their cost).
      if (id === 'language') {
        this.selectedLanguages = [];
      }
    } else {
      const entry = getMeritFlaw(id);
      if (!entry) return;
      this.selectedMeritsFlaws.push({ id, type: entry.type, cost: entry.cost });
    }
  }

  /** Whether the Language Merit is taken (gates the language picker). */
  get languageMeritSelected(): boolean {
    return this.isMeritFlawSelected('language');
  }

  /** Whether raising one dot of the given category is affordable. */
  canAffordFreebie(category: FreebieCategory): boolean {
    return this.freebieRemaining() >= FREEBIE_COSTS[category];
  }

  setAttributeFreebie(group: AttributeGroupId, member: string, value: number): void {
    const base = (this.freebieBaseline?.attributes as any)[group][member];
    // The generation cap (5, or 6 for the 7th generation) applies to freebies.
    const max = this.generationInfo.maxTrait;
    this.applyFreebie('attribute', this.getAttribute(group, member), value, max, base, (v) =>
      this.setTrait('attributes', group, member, v)
    );
  }

  // ----- Freebie baselines (for highlighting bought dots) -------------------

  attributeBaseline(group: AttributeGroupId, member: string): number {
    return (this.freebieBaseline?.attributes as any)?.[group][member] ?? -1;
  }

  abilityBaseline(group: AbilityGroupId, member: string): number {
    return (this.freebieBaseline?.abilities as any)?.[group][member] ?? -1;
  }

  disciplineBaseline(key: DisciplineKey): number {
    return (this.freebieBaseline?.disciplines as any)?.[key].level ?? -1;
  }

  backgroundBaseline(key: string): number {
    return (this.freebieBaseline?.advantages.backgrounds as any)?.[key] ?? -1;
  }

  virtueBaseline(key: string): number {
    return (this.freebieBaseline?.advantages.virtues as any)?.[key] ?? -1;
  }

  get roadBaseline(): number {
    return this.freebieBaseline?.advantages.path.level ?? -1;
  }

  get willpowerBaseline(): number {
    return this.freebieBaseline?.advantages.willpower.permanent ?? -1;
  }

  // ----- Trait specialties (V20: attributes/abilities 4+, free) -------------

  getSpecialties(member: string): string[] {
    return this.specialties[member] ?? [];
  }

  hasSpecialty(member: string, name: string): boolean {
    return this.getSpecialties(member).includes(name);
  }

  /** Current dots of an attribute or ability, looked up by member name. */
  traitLevelByMember(member: string): number {
    const attrGroup = ATTRIBUTE_GROUPS.find((g) => g.members.includes(member));
    if (attrGroup) {
      return this.getTrait('attributes', attrGroup.id, member);
    }
    const abilGroup = ABILITY_GROUPS.find((g) => g.members.includes(member));
    return abilGroup ? this.getTrait('abilities', abilGroup.id, member) : 0;
  }

  /** Whether a trait qualifies for a specialty (rated 4 or more). */
  canSpecialize(member: string): boolean {
    return this.traitLevelByMember(member) >= SPECIALTY_MIN_RATING;
  }

  /**
   * Toggle a trait's specialty. In V20 a trait rated 4+ gets one free
   * specialty; picking a new one replaces the previous. Clicking the current
   * one removes it. Traits below 4 cannot take a specialty.
   */
  toggleSpecialty(member: string, name: string): void {
    const list = this.specialties[member] ?? [];
    const index = list.indexOf(name);
    if (index >= 0) {
      list.splice(index, 1);
      this.specialties[member] = list;
      return;
    }
    if (!this.canSpecialize(member)) {
      return;
    }
    // One specialty per trait: a new pick replaces the previous one.
    if (list.length >= MAX_SPECIALTIES_PER_TRAIT) {
      this.specialties[member] = [name];
      return;
    }
    list.push(name);
    this.specialties[member] = list;
  }

  // ----- Languages (V20 Language Merit) -------------------------------------
  // The Language Merit costs 1 point and includes the first language; each
  // additional language costs 1 more freebie point.

  isLanguageSelected(id: string): boolean {
    return this.selectedLanguages.includes(id);
  }

  /** Freebie cost of languages beyond the first (the merit's point covers one). */
  languageFreebieCost(): number {
    return Math.max(0, this.selectedLanguages.length - 1) * LANGUAGE_FREEBIE_COST;
  }

  /**
   * Toggle an extra language. Removing always works; adding requires the
   * Language Merit and, for languages beyond the first, an affordable budget.
   */
  toggleLanguage(id: string): void {
    const index = this.selectedLanguages.indexOf(id);
    if (index >= 0) {
      this.selectedLanguages.splice(index, 1);
      return;
    }
    if (!this.languageMeritSelected) {
      return;
    }
    // The first language is covered by the merit's point; extras cost 1 each.
    const isExtra = this.selectedLanguages.length >= 1;
    if (!isExtra || this.freebieRemaining() >= LANGUAGE_FREEBIE_COST) {
      this.selectedLanguages.push(id);
    }
  }

  setAbilityFreebie(group: AbilityGroupId, member: string, value: number): void {
    const base = (this.freebieBaseline?.abilities as any)[group][member];
    // The generation cap (5, or 6 for the 7th generation) applies to freebies.
    const max = this.generationInfo.maxTrait;
    this.applyFreebie('ability', this.getAbility(group, member), value, max, base, (v) =>
      this.setTrait('abilities', group, member, v)
    );
  }

  setDisciplineFreebie(key: DisciplineKey, value: number): void {
    const base = (this.freebieBaseline?.disciplines as any)[key].level;
    this.applyFreebie('discipline', this.getDiscipline(key), value, MAX_TRAIT, base, (v) => {
      (this.draft.disciplines as any)[key].level = v;
    });
  }

  setBackgroundFreebie(key: string, value: number): void {
    const base = (this.freebieBaseline?.advantages.backgrounds as any)[key];
    this.applyFreebie('background', this.getBackground(key), value, MAX_TRAIT, base, (v) => {
      (this.draft.advantages.backgrounds as any)[key] = v;
    });
  }

  setVirtueFreebie(key: string, value: number): void {
    const base = (this.freebieBaseline?.advantages.virtues as any)[key];
    this.applyFreebie('virtue', this.getVirtue(key), value, MAX_TRAIT, base, (v) => {
      (this.draft.advantages.virtues as any)[key] = v;
    });
  }

  setRoadFreebie(value: number): void {
    const base = this.freebieBaseline?.advantages.path.level ?? 0;
    this.applyFreebie('path', this.draft.advantages.path.level, value, 10, base, (v) => {
      this.draft.advantages.path.level = v;
    });
  }

  setWillpowerFreebie(value: number): void {
    const base = this.freebieBaseline?.advantages.willpower.permanent ?? 0;
    this.applyFreebie('willpower', this.draft.advantages.willpower.permanent, value, 10, base, (v) => {
      this.draft.advantages.willpower.permanent = v;
    });
  }

  /**
   * Applies a freebie change, refusing to spend more than the remaining
   * budget and never letting a trait drop below the value it had when the
   * freebie step began.
   */
  private applyFreebie(
    category: FreebieCategory,
    current: number,
    target: number,
    max: number,
    base: number,
    apply: (value: number) => void
  ): void {
    const clamped = Math.max(base, Math.min(max, target));
    if (clamped > current) {
      const cost = (clamped - current) * FREEBIE_COSTS[category];
      if (cost > this.freebieRemaining()) {
        return;
      }
    }
    apply(clamped);
  }

  // ----- Step validation ----------------------------------------------------

  isStepComplete(step: CreationStep): boolean {
    switch (step) {
      case 'concept':
        return (
          !!this.clanId &&
          !!this.pathId &&
          !!this.draft.playerData.info.name.trim() &&
          !!this.draft.playerData.info.player.trim()
        );
      case 'attributes':
        return ATTRIBUTE_GROUPS.every((g) => this.attributeRemaining(g.id) === 0);
      case 'abilities':
        return ABILITY_GROUPS.every((g) => this.abilityRemaining(g.id) === 0);
      case 'advantages':
        return (
          this.disciplineRemaining() === 0 &&
          this.backgroundRemaining() === 0 &&
          this.virtueRemaining() === 0
        );
      case 'finishing':
        return this.freebieRemaining() === 0;
    }
  }

  // ----- Build final sheet --------------------------------------------------

  /** Specialties kept only for traits still rated 4+ (deep-copied). */
  private prunedSpecialties(): Record<string, string[]> {
    const result: Record<string, string[]> = {};
    Object.entries(this.specialties).forEach(([member, list]) => {
      if (list.length && this.canSpecialize(member)) {
        result[member] = cloneDeep(list);
      }
    });
    return result;
  }

  build(): VampireMasqueradeSheet {
    const sheet = cloneDeep(this.draft);
    sheet.playerData.background.clan = this.clanId;
    sheet.playerData.background.sect = sectForClanType(this.clan?.type);
    sheet.advantages.path.name = this.pathId;
    sheet.playerData.concept.generation = this.generation;
    sheet.advantages.bloodPool.max = this.generationInfo.bloodPool;
    // Starting blood pool is a 1d10 roll (the only roll in V20 creation).
    sheet.advantages.bloodPool.pool = Math.min(
      Math.floor(Math.random() * 10) + 1,
      this.generationInfo.bloodPool
    );
    // Chosen specialties (only for traits that still qualify at 4+).
    sheet.specialties = this.prunedSpecialties();
    // V20 Masquerade has no experience fields.
    sheet.experiences = {};
    // Languages: free native plus the Linguistics-granted ones.
    const languageNames = [
      ...(this.nativeLanguage ? [this.nativeLanguage] : []),
      ...this.selectedLanguages.map((id) => getLanguageName(id)),
    ];
    sheet.advantages.languages = languageNames.map((name) => ({ name, level: 0 }));
    // Nature/Demeanor/clan/road are stored as ids/keys so the sheet can
    // translate them reactively (CreationLabelPipe); weakness is derived from
    // the clan id on the sheet. Nothing is baked here.
    // Re-derive nothing here: road.level and willpower.permanent were locked
    // in at beginFreebies() and may have been raised with freebies.
    if (!this.freebieBaseline) {
      sheet.advantages.path.level = this.roadFromVirtues();
      sheet.advantages.willpower.permanent = this.getVirtue('courage');
    }
    sheet.advantages.willpower.temporal = sheet.advantages.willpower.permanent;
    // For a magic-discipline clan, write the chosen primary path and starting
    // ritual into the sheet's paths[]/rituals[] (matching the sheet model).
    const magicKey = this.magicDisciplineKey;
    if (magicKey) {
      const discipline = (sheet.disciplines as any)[magicKey];
      discipline.paths = this.magicPath
        ? [{ name: this.magicPath, level: discipline.level, inBlood: true }]
        : [];
      discipline.rituals = this.magicRitual
        ? [{ name: this.magicRitual, level: 1 }]
        : [];
    }
    // Write merits and flaws selected during creation.
    sheet.meritsFlaws = this.selectedMeritsFlaws.map((sel) => {
      const entry = getMeritFlaw(sel.id);
      return {
        id: sel.id,
        name: entry?.name ?? sel.id,
        type: sel.type,
        cost: sel.cost,
      };
    });
    sheet.advantages.merits = this.selectedMeritsFlaws
      .filter((s) => s.type === 'merit')
      .map((s) => ({ name: getMeritFlaw(s.id)?.name ?? s.id, level: s.cost }));
    sheet.advantages.flaws = this.selectedMeritsFlaws
      .filter((s) => s.type === 'flaw')
      .map((s) => ({ name: getMeritFlaw(s.id)?.name ?? s.id, level: s.cost }));
    sheet.isEditable = true;
    return sheet;
  }

  // ----- Helpers ------------------------------------------------------------

  private assignUniquePriority<K extends string>(
    map: Record<K, Priority | null>,
    group: K,
    priority: Priority
  ): void {
    // If another group already holds this priority, swap them.
    (Object.keys(map) as K[]).forEach((key) => {
      if (key !== group && map[key] === priority) {
        map[key] = map[group];
      }
    });
    map[group] = priority;
  }

  private groupMembers<T extends string>(
    groups: { id: T; members: string[] }[],
    id: T
  ): string[] {
    return groups.find((g) => g.id === id)?.members ?? [];
  }

  private getTrait(root: 'attributes' | 'abilities', group: string, member: string): number {
    return (this.draft as any)[root][group][member];
  }

  private setTrait(
    root: 'attributes' | 'abilities',
    group: string,
    member: string,
    value: number
  ): void {
    (this.draft as any)[root][group][member] = value;
  }
}
