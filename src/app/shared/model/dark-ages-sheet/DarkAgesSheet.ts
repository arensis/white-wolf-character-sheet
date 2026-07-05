import { DarkAgesPlayerData } from './player-data/DarkAgesPlayerData';
import { DarkAgesAdvantages } from './advantages/DarkAgesAdvantages';
import { DarkAgesAbilities } from './abilities/DarkAgesAbilities';
import { DarkAgesAttributes } from './attributes/DarkAgesAttributes';
import { Sheet } from '../sheet/Sheet';
export interface DarkAgesSheet extends Sheet {
  playerData: DarkAgesPlayerData;
  attributes: DarkAgesAttributes;
  abilities: DarkAgesAbilities;
  advantages: DarkAgesAdvantages;
}
