import { DarkAgesTalents } from "src/app/shared/model/dark-ages-sheet/abilities/DarkAgesTalents";

export interface VampireDATalents extends DarkAgesTalents {
  leadership: number;
  legerdemain: number;
}
