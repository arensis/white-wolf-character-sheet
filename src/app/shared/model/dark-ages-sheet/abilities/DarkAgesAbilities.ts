import { DarkAgesKnowledges } from "./DarkAgesKnowledges";
import { DarkAgesSkills } from "./DarkAgesSkills";
import { DarkAgesTalents } from "./DarkAgesTalents";

export interface DarkAgesAbilities {
  talents: DarkAgesTalents;
  skills: DarkAgesSkills;
  knowledges: DarkAgesKnowledges;
}
