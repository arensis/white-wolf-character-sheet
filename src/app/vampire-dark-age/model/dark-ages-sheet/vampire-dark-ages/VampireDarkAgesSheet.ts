import { DarkAgesSheet } from "../../../../shared/model/dark-ages-sheet/DarkAgesSheet";
import { VampireDAAbilities } from "./abilities/VampireDAAbilities";
import { VampireDAAdvantages } from "./advantages/VampireDAAdvantages";
import { VampireDAAttributes } from "./attributes/VampireDAAttributes";
import { VampireDADisciplines } from "./disciplines/VampireDADisciplines";
import { VampireDAGear } from "./gear/VampireDAGear";
import { VampireDAPlayerData } from "./player-data/VampireDAPlayerData";

export interface VampireDarkAgesSheet extends DarkAgesSheet {
  playerData: VampireDAPlayerData;
  attributes: VampireDAAttributes;
  abilities: VampireDAAbilities;
  advantages: VampireDAAdvantages;
  disciplines: VampireDADisciplines;
  equipment: VampireDAGear;
  isEditable: boolean;
}
