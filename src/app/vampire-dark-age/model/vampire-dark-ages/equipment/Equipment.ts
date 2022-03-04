
import { Armor } from "./Armor";
import { Shield } from "./Shield";
import { Weapons } from "./weapons/Weapons";

export interface Equipment {
  travelEquipment: string[];
  weapons: Weapons;
  armor: Armor;
  shield: Shield;
}
