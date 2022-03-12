import { CommonBasicProtectionEquipment } from "./CommonBasicProtectionEquipment";

export interface CommonArmor extends CommonBasicProtectionEquipment {
  movementPenalty: number;
  minStrength: number;
}
