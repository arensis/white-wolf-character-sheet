/**
 * Numerical rules for character creation in *Edad Oscura: Vampiro*
 * (Dark Ages: Vampire). Source: rulebook, "Sumario de Creación de
 * Personaje" (p. 128).
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
export const DISCIPLINE_POINTS = 4;

/** Dots to spread among backgrounds. */
export const BACKGROUND_POINTS = 5;

/**
 * Virtues: every character starts with 1 dot in Courage and 1 dot in each
 * of the two virtues tied to their Road, then distributes 7 more dots.
 */
export const VIRTUE_POINTS = 7;
export const VIRTUE_BASE = 1;

/** Freebie points spent at the end of creation. */
export const FREEBIE_POINTS = 15;

/** Freebie cost per dot, by category. */
export const FREEBIE_COSTS = {
  attribute: 5,
  ability: 2,
  discipline: 7,
  background: 1,
  virtue: 2,
  road: 1,
  willpower: 1,
  // Cost per ability specialty (max 3 per ability) bought with freebie points.
  specialty: 1,
  // Cost per extra experience field (the first one is free).
  experience: 1,
} as const;

export type FreebieCategory = keyof typeof FREEBIE_COSTS;
