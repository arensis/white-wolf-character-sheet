import { VampireVTMDisciplines } from '../../model/masquerade-sheet/vampire-masquerade/disciplines/VampireVTMDisciplines';
import { AbilityGroupId, AttributeGroupId } from './traits.data';

/** A discipline key as stored in the sheet model. */
export type DisciplineKey = keyof VampireVTMDisciplines;

/** Camarilla / Sabbat / independiente en V20; usado solo como agrupación visual. */
export type ClanType = 'camarilla' | 'sabbat' | 'independent' | 'caitiff';

export interface ClanData {
  id: string;
  type: ClanType;
  /** Clan disciplines, marked "in blood" on the sheet. Empty for Caitiff. */
  disciplines: DisciplineKey[];
  /** Background keys that fit the clan's usual concepts (soft suggestion). */
  recommendedBackgrounds?: string[];
  /** Paths the clan is traditionally drawn to (soft suggestion). */
  recommendedPaths?: string[];
  /** Attribute groups that fit the clan's usual concepts (soft suggestion). */
  recommendedAttributeGroups?: AttributeGroupId[];
  /** Ability groups that fit the clan's usual concepts (soft suggestion). */
  recommendedAbilityGroups?: AbilityGroupId[];
}

/**
 * The thirteen clans of V20 plus the clanless Caitiff.
 * Clan disciplines follow the rulebook (Capítulo Dos).
 */
export const CLANS: ClanData[] = [
  // Camarilla
  {
    id: 'brujah', type: 'camarilla', disciplines: ['celerity', 'potence', 'presence'],
    recommendedAttributeGroups: ['physical'], recommendedAbilityGroups: ['talents'],
  },
  {
    id: 'gangrel', type: 'camarilla', disciplines: ['animalism', 'fortitude', 'protean'],
    recommendedAttributeGroups: ['physical'], recommendedAbilityGroups: ['talents', 'skills'],
  },
  {
    id: 'malkavian', type: 'camarilla', disciplines: ['auspex', 'dementation', 'obfuscate'],
    recommendedAttributeGroups: ['mental'], recommendedAbilityGroups: ['talents', 'knowledges'],
  },
  {
    id: 'nosferatu', type: 'camarilla', disciplines: ['animalism', 'obfuscate', 'potence'],
    recommendedAttributeGroups: ['physical', 'mental'], recommendedAbilityGroups: ['talents', 'skills'],
  },
  {
    id: 'toreador', type: 'camarilla', disciplines: ['auspex', 'celerity', 'presence'],
    recommendedAttributeGroups: ['social'], recommendedAbilityGroups: ['talents', 'skills'],
  },
  {
    id: 'tremere', type: 'camarilla', disciplines: ['auspex', 'dominate', 'thaumaturgy'],
    recommendedAttributeGroups: ['mental'], recommendedAbilityGroups: ['knowledges'],
  },
  {
    id: 'ventrue', type: 'camarilla', disciplines: ['dominate', 'fortitude', 'presence'],
    recommendedAttributeGroups: ['social'], recommendedAbilityGroups: ['knowledges'],
  },
  // Sabbat
  {
    id: 'lasombra', type: 'sabbat', disciplines: ['dominate', 'obtenebration', 'potence'],
    recommendedAttributeGroups: ['social'], recommendedAbilityGroups: ['talents', 'knowledges'],
  },
  {
    id: 'tzimisce', type: 'sabbat', disciplines: ['animalism', 'auspex', 'vicissitude'],
    recommendedAttributeGroups: ['mental'], recommendedAbilityGroups: ['knowledges'],
  },
  // Independientes
  {
    id: 'assamite', type: 'independent', disciplines: ['celerity', 'obfuscate', 'quietus'],
    recommendedAttributeGroups: ['physical'], recommendedAbilityGroups: ['talents', 'skills'],
  },
  {
    id: 'followersOfSet', type: 'independent', disciplines: ['obfuscate', 'presence', 'serpentis'],
    recommendedAttributeGroups: ['social'], recommendedAbilityGroups: ['talents', 'knowledges'],
  },
  {
    id: 'giovanni', type: 'independent', disciplines: ['dominate', 'necromancy', 'potence'],
    recommendedAttributeGroups: ['mental', 'social'], recommendedAbilityGroups: ['knowledges'],
  },
  {
    id: 'ravnos', type: 'independent', disciplines: ['animalism', 'chimerstry', 'fortitude'],
    recommendedAttributeGroups: ['social'], recommendedAbilityGroups: ['talents', 'skills'],
  },
  // Sin clan
  {
    id: 'caitiff', type: 'caitiff', disciplines: [],
  },
];

export const getClan = (id: string): ClanData | undefined =>
  CLANS.find((clan) => clan.id === id);
