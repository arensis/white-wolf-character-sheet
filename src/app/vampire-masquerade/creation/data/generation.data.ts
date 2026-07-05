/**
 * Generation rules for V20. Characters default to the 13th generation;
 * each dot of the Generation background lowers it by one, down to the 8th.
 */

export interface GenerationInfo {
  generation: number;
  /** Maximum starting/spendable blood pool. */
  bloodPool: number;
  /** Blood points spendable per turn. */
  bloodPerTurn: number;
  /** Highest rating an Attribute may reach. */
  maxTrait: number;
}

/** Default generation when the Generation background is 0. */
export const DEFAULT_GENERATION = 13;

/** Indexed by generation number. */
export const GENERATION_TABLE: Record<number, GenerationInfo> = {
  13: { generation: 13, bloodPool: 10, bloodPerTurn: 1, maxTrait: 5 },
  12: { generation: 12, bloodPool: 11, bloodPerTurn: 1, maxTrait: 5 },
  11: { generation: 11, bloodPool: 12, bloodPerTurn: 1, maxTrait: 5 },
  10: { generation: 10, bloodPool: 13, bloodPerTurn: 1, maxTrait: 5 },
  9: { generation: 9, bloodPool: 14, bloodPerTurn: 2, maxTrait: 5 },
  8: { generation: 8, bloodPool: 15, bloodPerTurn: 3, maxTrait: 5 },
};

/** Generation derived from the Generation background dots (0–5). */
export const generationFromBackground = (backgroundDots: number): number =>
  DEFAULT_GENERATION - Math.max(0, Math.min(5, backgroundDots));

export const generationInfo = (generation: number): GenerationInfo =>
  GENERATION_TABLE[generation] ?? GENERATION_TABLE[DEFAULT_GENERATION];
