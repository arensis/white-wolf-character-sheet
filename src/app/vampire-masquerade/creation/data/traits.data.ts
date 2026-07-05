/**
 * Trait group definitions used to drive the creation steps. The member keys
 * match the field names in the V20 sheet model.
 */

export type AttributeGroupId = 'physical' | 'social' | 'mental';
export type AbilityGroupId = 'talents' | 'skills' | 'knowledges';

export interface TraitGroup<T extends string> {
  id: T;
  members: string[];
}

export const ATTRIBUTE_GROUPS: TraitGroup<AttributeGroupId>[] = [
  { id: 'physical', members: ['strength', 'dexterity', 'stamina'] },
  { id: 'social', members: ['charisma', 'manipulation', 'appearance'] },
  { id: 'mental', members: ['perception', 'intelligence', 'wits'] },
];

export const ABILITY_GROUPS: TraitGroup<AbilityGroupId>[] = [
  {
    id: 'talents',
    members: [
      'alertness',
      'athletics',
      'awareness',
      'brawl',
      'emptahy',
      'expression',
      'intimidation',
      'leadership',
      'streetwise',
      'subterfuge',
    ],
  },
  {
    id: 'skills',
    members: [
      'animalKen',
      'crafts',
      'drive',
      'etiquette',
      'firearms',
      'larceny',
      'melee',
      'performance',
      'stealth',
      'survival',
    ],
  },
  {
    id: 'knowledges',
    members: [
      'academics',
      'computer',
      'finance',
      'investigation',
      'law',
      'medicine',
      'occult',
      'politics',
      'science',
      'technology',
    ],
  },
];

/** Backgrounds available at creation (V20). */
export const BACKGROUNDS: string[] = [
  'allies',
  'alternateIdentity',
  'blackHandMembership',
  'contacts',
  'domain',
  'fame',
  'generation',
  'herd',
  'influence',
  'mentor',
  'resources',
  'retainers',
  'rituals',
  'status',
];
