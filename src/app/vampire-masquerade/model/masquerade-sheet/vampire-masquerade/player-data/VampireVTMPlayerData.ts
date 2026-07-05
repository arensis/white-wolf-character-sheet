import { DarkAgesPlayerData } from "src/app/shared/model/dark-ages-sheet/player-data/DarkAgesPlayerData";
import { VampireVTMBackground } from "./VampireVTMBackground";
import { VampireVTMConcept } from "./VampireVTMConcept";


export interface VampireVTMPlayerData extends DarkAgesPlayerData {
  background: VampireVTMBackground;
  concept: VampireVTMConcept;
}
