import { CommonKnowledges } from "./CommonKnowledges";
import { CommonSkills } from "./CommonSkills";
import { CommonTalents } from "./CommonTalents";

export interface CommonAbilities {
  talents: CommonTalents;
  skills: CommonSkills;
  knowledges: CommonKnowledges;
}
