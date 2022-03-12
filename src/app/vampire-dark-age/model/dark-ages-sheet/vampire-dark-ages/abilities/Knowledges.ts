import { CommonKnowledges } from "src/app/shared/model/dark-ages-sheet/abilities/CommonKnowledges";

export interface Knowledges extends CommonKnowledges {
  law: number;
  seneschal: number;
  theology: number;
}
