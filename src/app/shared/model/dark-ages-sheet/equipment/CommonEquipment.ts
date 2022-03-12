
import { CommonArmor } from "./CommonArmor";
import { CommonShield } from "./CommonShield";
import { CommonWeapons } from "./weapons/CommonWeapons";

export interface CommonEquipment {
  travelEquipment: string[];
  weapons: CommonWeapons;
  armor: CommonArmor;
  shield: CommonShield;
}
