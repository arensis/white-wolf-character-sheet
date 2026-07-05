import { CustomProperty } from "src/app/shared/model/CustomProperty";
import { Skills } from "src/app/shared/model/sheet/abilities/Skills";

export interface VampireVTMSkills extends Skills {
  animalKen: number;
  drive: number;
  firearms: number;
  larceny: number;
  survival: number;
  customSkills: CustomProperty[];
}
