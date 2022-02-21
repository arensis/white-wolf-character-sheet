import { MeleeWeapons } from "./MeleeWeapons";
import { RangedWeapon } from "./RangedWeapon";

export interface Weapons {
  melee: MeleeWeapons[];
  ranged: RangedWeapon[];
}
