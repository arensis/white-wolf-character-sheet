import { DarkAgesMeleeWeapons } from "./DarkAgesMeleeWeapons";
import { DarkAgesRangedWeapon } from "./DarkAgesRangedWeapon";

export interface DarkAgesWeapons {
  melee: DarkAgesMeleeWeapons[];
  ranged: DarkAgesRangedWeapon[];
}
