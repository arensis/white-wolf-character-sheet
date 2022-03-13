
import { Gear } from "../../sheet/gear/Gear";
import { DarkAgesArmor } from "./DarkAgesArmor";
import { DarkAgesShield } from "./DarkAgesShield";
import { DarkAgesWeapons } from "./weapons/DarkAgesWeapons";

export interface DarkAgesGear extends Gear {
  travelEquipment: string[];
  weapons: DarkAgesWeapons;
  armor: DarkAgesArmor;
  shield: DarkAgesShield;
}
