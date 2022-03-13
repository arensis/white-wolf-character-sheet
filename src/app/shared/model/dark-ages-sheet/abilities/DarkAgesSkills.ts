import { CustomProperty } from "../../CustomProperty";
import { Skills } from "../../sheet/abilities/Skills";

export interface DarkAgesSkills extends Skills {
  animalKen: number;
  archery: number;
  ride: number;
  survival: number;
  customSkills: CustomProperty[];
}
