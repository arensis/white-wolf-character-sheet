import { CommonMeleeWeapons } from "./CommonMeleeWeapons";
import { CommonRangedWeapon } from "./CommonRangedWeapon";

export interface CommonWeapons {
  melee: CommonMeleeWeapons[];
  ranged: CommonRangedWeapon[];
}
