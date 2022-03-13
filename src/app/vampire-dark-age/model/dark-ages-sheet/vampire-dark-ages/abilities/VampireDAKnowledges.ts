import { DarkAgesKnowledges } from "src/app/shared/model/dark-ages-sheet/abilities/DarkAgesKnowledges";

export interface VampireDAKnowledges extends DarkAgesKnowledges {
  law: number;
  seneschal: number;
  theology: number;
}
