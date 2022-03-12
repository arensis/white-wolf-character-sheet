import { CommonPlayerData } from "src/app/shared/model/dark-ages-sheet/player-data/CommonPlayerData";
import { Background } from "./Background";
import { Concept } from "./Concept";

export interface PlayerData extends CommonPlayerData {
  background: Background;
  concept: Concept;
}
