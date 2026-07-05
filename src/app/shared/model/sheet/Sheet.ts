import { Abilities } from "./abilities/Abilities";
import { Advantages } from "./advantages/Advantages";
import { Attributes } from "./attributes/Attributes";
import { PlayerData } from "./playerData/PlayerData";

export interface Sheet {
  playerData: PlayerData;
  attributes: Attributes;
  abilities: Abilities;
  advantages: Advantages;
  isEditable: boolean;
}
