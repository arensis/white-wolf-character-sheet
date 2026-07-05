import { VampireVTMBearing } from "./VampireVTMBearing";

/** Humanity or a Path of Enlightenment, plus the character's Bearing. */
export interface VampireVTMPath {
  name: string;
  level: number;
  bearing: VampireVTMBearing;
}
