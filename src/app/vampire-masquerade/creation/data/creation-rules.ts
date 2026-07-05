/**
 * Numerical rules for character creation in Vampire: The Masquerade 20th
 * Anniversary Edition (V20 character creation summary).
 */

export type Priority = 'primary' | 'secondary' | 'tertiary';

export const PRIORITIES: Priority[] = ['primary', 'secondary', 'tertiary'];

/** Extra dots to distribute by priority. Attributes start with 1 dot each. */
export const ATTRIBUTE_POINTS: Record<Priority, number> = {
  primary: 7,
  secondary: 5,
  tertiary: 3,
};

/** Extra dots to distribute by priority. Abilities start at 0. */
export const ABILITY_POINTS: Record<Priority, number> = {
  primary: 13,
  secondary: 9,
  tertiary: 5,
};

/** No ability may exceed this many dots during creation. */
export const MAX_ABILITY_IN_CREATION = 3;

/** Attributes start at 1 and cap at 5 during creation. */
export const MIN_ATTRIBUTE = 1;
export const MAX_TRAIT = 5;

/** Free dots given to every attribute before distribution. */
export const ATTRIBUTE_BASE = 1;

/** Dots to spread among the chosen clan's disciplines. */
export const DISCIPLINE_POINTS = 3;

/** Dots to spread among backgrounds. */
export const BACKGROUND_POINTS = 5;

/**
 * Virtues: every character starts with 1 dot in each Virtue, then
 * distributes 7 more dots.
 */
export const VIRTUE_POINTS = 7;
export const VIRTUE_BASE = 1;

/** Freebie points spent at the end of creation. */
export const FREEBIE_POINTS = 15;

/** Max points of Merits and of Flaws a character may take. */
export const MAX_MERIT_FLAW_POINTS = 7;

/** Freebie cost per dot, by category. */
export const FREEBIE_COSTS = {
  attribute: 5,
  ability: 2,
  discipline: 7,
  background: 1,
  virtue: 2,
  path: 2,
  willpower: 1,
  // Note: in V20 specialties are free at creation (a benefit of rating 4+),
  // so they have no freebie cost, and there are no experience fields.
};

export type FreebieCategory = keyof typeof FREEBIE_COSTS;
