import { CustomProperty } from "../../../../shared/model/CustomProperty";

export interface Knowledges {
  academics: number;
  hearthWisdom: number;
  investigation: number;
  law: number;
  linguistics: number;
  medicine: number;
  occult: number;
  politics: number;
  seneschal: number;
  theology: number;
  customKnowledges: CustomProperty[]
}
