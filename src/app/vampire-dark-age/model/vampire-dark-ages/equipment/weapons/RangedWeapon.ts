import { GenericWeapon } from './GenericWeapon';

export interface RangedWeapon extends GenericWeapon {
  rate: string;
  ammo: number;
  minStrength: number;
}
