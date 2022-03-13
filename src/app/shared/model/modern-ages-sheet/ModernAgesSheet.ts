import { ModernAgesAdvantages } from './advantages/ModernAgesAdvantages';
import ModernAgesAbilities from "./abilities/ModernAgesAbilities";
import { ModernAgesAttributes } from "./attributes/ModernAgesAttributes";
import { ModernAgesPlayerData } from "./playerData/ModernAgesPlayerData";
import { Sheet } from '../sheet/Sheet';

export interface ModerAgesSheet extends Sheet {
  playerData: ModernAgesPlayerData;
  attributes: ModernAgesAttributes;
  abilities: ModernAgesAbilities;
  advantages: ModernAgesAdvantages;
}
