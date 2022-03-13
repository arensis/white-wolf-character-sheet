import { DarkAgesAbilities } from '../../../../../shared/model/dark-ages-sheet/abilities/DarkAgesAbilities';
import { VampireDAKnowledges } from "./VampireDAKnowledges";
import { VampireDASkills } from "./VampireDASkills";
import { VampireDATalents } from "./VampireDATalents";

export interface VampireDAAbilities extends DarkAgesAbilities {
  talents: VampireDATalents;
  skills: VampireDASkills;
  knowledges: VampireDAKnowledges;
}
