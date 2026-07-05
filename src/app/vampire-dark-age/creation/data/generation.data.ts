/**
 * Generation rules for *Edad Oscura: Vampiro* (rulebook p. 164 and the
 * Generation background, p. 79). Characters default to the 12th generation;
 * each dot of the Generation background lowers it by one, down to the 7th.
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
export const DEFAULT_GENERATION = 12;

/** Indexed by generation number. */
export const GENERATION_TABLE: Record<number, GenerationInfo> = {
  13: { generation: 13, bloodPool: 10, bloodPerTurn: 1, maxTrait: 5 },
  12: { generation: 12, bloodPool: 11, bloodPerTurn: 1, maxTrait: 5 },
  11: { generation: 11, bloodPool: 12, bloodPerTurn: 1, maxTrait: 5 },
  10: { generation: 10, bloodPool: 13, bloodPerTurn: 1, maxTrait: 5 },
  9: { generation: 9, bloodPool: 14, bloodPerTurn: 2, maxTrait: 5 },
  8: { generation: 8, bloodPool: 15, bloodPerTurn: 3, maxTrait: 5 },
  7: { generation: 7, bloodPool: 20, bloodPerTurn: 4, maxTrait: 6 },
};

/** Generation derived from the Generation background dots (0–5). */
export const generationFromBackground = (backgroundDots: number): number =>
  DEFAULT_GENERATION - Math.max(0, Math.min(5, backgroundDots));

export const generationInfo = (generation: number): GenerationInfo =>
  GENERATION_TABLE[generation] ?? GENERATION_TABLE[DEFAULT_GENERATION];
