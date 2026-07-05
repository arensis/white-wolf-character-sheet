import { VampireDADisciplines } from '../../model/dark-ages-sheet/vampire-dark-ages/disciplines/VampireDADisciplines';
import { AbilityGroupId, AttributeGroupId } from './traits.data';

/** A discipline key as stored in the sheet model. */
export type DisciplineKey = keyof VampireDADisciplines;

export interface ClanData {
  id: string;
  /** i18n key under `creation.clans.<id>`. */
  type: 'high' | 'low' | 'caitiff';
  /** Clan disciplines, marked "in blood" on the sheet. Empty for Caitiff. */
  disciplines: DisciplineKey[];
  /** Roads the rulebook strongly associates with the clan (soft suggestion). */
  recommendedRoads?: string[];
  /** Attribute groups the book recommends as primary for this clan. */
  recommendedAttributeGroups?: AttributeGroupId[];
  /** Ability groups the book recommends as primary for this clan. */
  recommendedAbilityGroups?: AbilityGroupId[];
  /** Background keys the book lists as common for this clan. */
  recommendedBackgrounds?: string[];
}

/**
 * The thirteen clans of *Edad Oscura: Vampiro* plus the clanless Caitiff.
 * Clan disciplines follow the rulebook (Capítulo Dos).
 */
export const CLANS: ClanData[] = [
  // Altos Clanes
  {
    id: 'brujah', type: 'high', disciplines: ['celerity', 'potence', 'presence'],
    recommendedRoads: ['humanity', 'heaven', 'kings'],
    recommendedAttributeGroups: ['physical', 'mental'],
    recommendedAbilityGroups: ['talents', 'knowledges'],
  },
  {
    id: 'cappadocian', type: 'high', disciplines: ['auspex', 'fortitude', 'mortis'],
    recommendedRoads: ['heaven', 'sin'],
    recommendedAttributeGroups: ['mental'],
    recommendedAbilityGroups: ['knowledges'],
  },
  {
    id: 'lasombra', type: 'high', disciplines: ['dominate', 'obtenebration', 'potence'],
    recommendedRoads: ['heaven', 'kings'],
    recommendedAttributeGroups: ['mental'],
    recommendedAbilityGroups: ['talents'],
    recommendedBackgrounds: ['influence', 'resources', 'domain', 'mentor'],
  },
  {
    id: 'toreador', type: 'high', disciplines: ['auspex', 'celerity', 'presence'],
    recommendedRoads: ['humanity', 'kings'],
    recommendedAttributeGroups: ['social'],
    recommendedAbilityGroups: ['talents'],
    recommendedBackgrounds: ['domain', 'retainers', 'herd', 'resources'],
  },
  {
    id: 'tzimisce', type: 'high', disciplines: ['animalism', 'auspex', 'vicissitude'],
    recommendedRoads: ['kings', 'heaven'],
    recommendedAttributeGroups: ['mental'],
    recommendedBackgrounds: ['domain', 'mentor', 'retainers', 'herd', 'resources'],
  },
  {
    id: 'ventrue', type: 'high', disciplines: ['dominate', 'fortitude', 'presence'],
    recommendedRoads: ['kings'],
    recommendedAttributeGroups: ['physical'],
    recommendedAbilityGroups: ['skills', 'knowledges'],
    recommendedBackgrounds: ['allies', 'retainers', 'domain', 'resources'],
  },
  // Bajos Clanes
  {
    id: 'assamite', type: 'low', disciplines: ['celerity', 'obfuscate', 'quietus'],
    recommendedRoads: ['heaven', 'kings', 'humanity'],
    recommendedAttributeGroups: ['physical', 'mental'],
    recommendedAbilityGroups: ['skills', 'knowledges'],
    recommendedBackgrounds: ['mentor', 'generation'],
  },
  {
    id: 'gangrel', type: 'low', disciplines: ['animalism', 'fortitude', 'protean'],
    recommendedRoads: ['beast'],
    recommendedAttributeGroups: ['physical'],
    recommendedAbilityGroups: ['talents', 'skills'],
  },
  {
    id: 'malkavian', type: 'low', disciplines: ['auspex', 'dementation', 'obfuscate'],
    recommendedRoads: ['heaven'],
    recommendedAttributeGroups: ['mental'],
    recommendedAbilityGroups: ['talents'],
  },
  {
    id: 'nosferatu', type: 'low', disciplines: ['animalism', 'obfuscate', 'potence'],
    recommendedRoads: ['heaven', 'sin', 'beast'],
    recommendedAttributeGroups: ['mental'],
    recommendedAbilityGroups: ['knowledges'],
    recommendedBackgrounds: ['contacts'],
  },
  {
    id: 'ravnos', type: 'low', disciplines: ['animalism', 'chimerstry', 'fortitude'],
    recommendedRoads: ['humanity', 'sin'],
    recommendedAttributeGroups: ['social'],
    recommendedAbilityGroups: ['talents'],
    recommendedBackgrounds: ['allies', 'mentor', 'contacts', 'resources'],
  },
  {
    id: 'setite', type: 'low', disciplines: ['obfuscate', 'presence', 'serpentis'],
    recommendedRoads: ['beast', 'kings', 'sin'],
    recommendedAttributeGroups: ['social'],
    recommendedAbilityGroups: ['knowledges'],
    recommendedBackgrounds: ['retainers', 'herd', 'resources', 'contacts', 'influence', 'mentor'],
  },
  {
    id: 'tremere', type: 'low', disciplines: ['auspex', 'dominate', 'thaumaturgy'],
    recommendedRoads: ['humanity', 'sin'],
    recommendedAttributeGroups: ['mental'],
    recommendedAbilityGroups: ['knowledges'],
    recommendedBackgrounds: ['mentor'],
  },
  // Sin clan
  { id: 'caitiff', type: 'caitiff', disciplines: [] },
];

export const getClan = (id: string): ClanData | undefined =>
  CLANS.find((clan) => clan.id === id);
