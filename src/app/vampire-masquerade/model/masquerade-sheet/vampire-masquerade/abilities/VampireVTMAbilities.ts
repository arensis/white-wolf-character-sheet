import { Abilities } from "src/app/shared/model/sheet/abilities/Abilities";
import { VampireVTMKnowledges } from "./VampireVTMKnowledges";
import { VampireVTMSkills } from "./VampireVTMSkills";
import { VampireVTMTalents } from "./VampireVTMTalents";

export interface VampireVTMAbilities extends Abilities {
  talents: VampireVTMTalents;
  skills: VampireVTMSkills;
  knowledges: VampireVTMKnowledges;
}
