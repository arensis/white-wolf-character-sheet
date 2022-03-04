import { BasicProtectionEquipment } from "./BasicProtectionEquipment";

export interface Armor extends BasicProtectionEquipment {
  movementPenalty: number;
  minStrength: number;
}
