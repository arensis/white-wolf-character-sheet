import { Abilities } from "../../sheet/abilities/Abilities";

export default interface ModernAgesAbilities extends Abilities {
  talents: ModernAgesTalents;
  skills: ModernAgesSkills;
  knowledges: ModernAgesKnowledges;
}
