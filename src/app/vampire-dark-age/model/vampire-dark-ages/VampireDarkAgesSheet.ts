import { Abilities } from "./abilities/Abilities";
import { Advantages } from "./advantages/Advantages";
import { Attributes } from "./attributes/Attributes";
import { Disciplines } from "./disciplines/Disciplines";
import { Equipment } from "./equipment/Equipment";
import { PlayerData } from "./player-data/PlayerData";

export interface VampireDarkAgesSheet {
  playerData: PlayerData;
  attributes: Attributes;
  abilities: Abilities;
  advantages: Advantages;
  disciplines: Disciplines;
  equipment: Equipment;
  isEditable: boolean;
}
