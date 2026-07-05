import { CustomProperty } from "src/app/shared/model/CustomProperty";
import { Knowledges } from "src/app/shared/model/sheet/abilities/Knowledges";

export interface VampireVTMKnowledges extends Knowledges {
  academics: number;
  computer: number;
  finance: number;
  law: number;
  occult: number;
  politics: number;
  science: number;
  technology: number;
  customKnowledges: CustomProperty[];
}
