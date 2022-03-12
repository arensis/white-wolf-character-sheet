import { CommonGenericWeapon } from './CommonGenericWeapon';

export interface CommonRangedWeapon extends CommonGenericWeapon {
  rate: string;
  ammo: number;
  minStrength: number;
}
