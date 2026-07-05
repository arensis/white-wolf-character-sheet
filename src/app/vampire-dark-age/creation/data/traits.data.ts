/**
 * Trait group definitions used to drive the creation steps. The member keys
 * match the field names in the sheet model (see EmptySheetService).
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
      'brawl',
      'dodge',
      'emptahy',
      'expression',
      'intimidation',
      'leadership',
      'legerdemain',
      'subterfuge',
    ],
  },
  {
    id: 'skills',
    members: [
      'animalKen',
      'archery',
      'commerce',
      'crafts',
      'etiquette',
      'melee',
      'performance',
      'ride',
      'stealth',
      'survival',
    ],
  },
  {
    id: 'knowledges',
    members: [
      'academics',
      'hearthWisdom',
      'investigation',
      'law',
      'linguistics',
      'medicine',
      'occult',
      'politics',
      'seneschal',
      'theology',
    ],
  },
];

/** Backgrounds available at creation. */
export const BACKGROUNDS: string[] = [
  'allies',
  'contacts',
  'domain',
  'generation',
  'herd',
  'influence',
  'mentor',
  'resources',
  'retainers',
  'status',
];
