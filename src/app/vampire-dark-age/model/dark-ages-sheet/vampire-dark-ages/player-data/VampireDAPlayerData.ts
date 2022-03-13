import { DarkAgesPlayerData } from "src/app/shared/model/dark-ages-sheet/player-data/DarkAgesPlayerData";
import { VampireDABackground } from "./VampireDABackground";
import { VampireDAConcept } from "./VampireDaConcept";

export interface VampireDAPlayerData extends DarkAgesPlayerData {
  background: VampireDABackground;
  concept: VampireDAConcept;
}
