import { Knowledges } from "./Knowledges";
import { Skills } from "./Skills";
import { Talents } from "./Talents";

export interface Abilities {
  talents: Talents;
  skills: Skills;
  knowledges: Knowledges;
}
