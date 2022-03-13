import { CustomProperty } from "../../CustomProperty";
import { Knowledges } from "../../sheet/abilities/Knowledges";

export interface DarkAgesKnowledges extends Knowledges{
  academics: number;
  hearthWisdom: number;
  linguistics: number;
  occult: number;
  politics: number;
  customKnowledges: CustomProperty[]
}
