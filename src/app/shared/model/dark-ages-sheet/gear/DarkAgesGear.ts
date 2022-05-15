
import { Gear } from "../../sheet/gear/Gear";
import { DarkAgesArmor } from "./armors/DarkAgesArmor";
import { DarkAgesShield } from "./armors/DarkAgesShield";
import { DarkAgesWeapons } from "./weapons/DarkAgesWeapons";

export interface DarkAgesGear extends Gear {
  travelEquipment: string[];
  weapons: DarkAgesWeapons;
  armor: DarkAgesArmor;
  shield: DarkAgesShield;
}
