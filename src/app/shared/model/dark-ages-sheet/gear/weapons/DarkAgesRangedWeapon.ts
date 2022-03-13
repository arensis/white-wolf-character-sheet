import { DarkAgesGenericWeapon } from './DarkAgesGenericWeapon';

export interface DarkAgesRangedWeapon extends DarkAgesGenericWeapon {
  rate: string;
  ammo: number;
  minStrength: number;
}
