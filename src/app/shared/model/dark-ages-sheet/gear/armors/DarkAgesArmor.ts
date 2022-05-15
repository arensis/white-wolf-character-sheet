import { DarkAgesBasicProtectionEquipment } from "./DarkAgesBasicProtectionEquipment";

export interface DarkAgesArmor extends DarkAgesBasicProtectionEquipment {
  movementPenalty: number;
  minStrength: number;
}
