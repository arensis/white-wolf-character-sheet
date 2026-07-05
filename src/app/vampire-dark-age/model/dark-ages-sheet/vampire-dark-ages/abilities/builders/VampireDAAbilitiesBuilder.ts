import { VampireDAKnowledgesBuilder } from './VampireDAKnowledgesBuilder';
import { VampireDASkillsBuilder } from './VampireDASkillsBuilder';
import { VampireDATalentsBuilder } from './VampireDATalentsBuilder';
import { VampireDAAbilities } from './../VampireDAAbilities';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireDAAbilitiesBuilder extends BuilderTemplate<VampireDAAbilities> {
  protected defaultData(): VampireDAAbilities {
    return {
      talents: new VampireDATalentsBuilder().build(),
      skills: new VampireDASkillsBuilder().build(),
      knowledges: new VampireDAKnowledgesBuilder().build()
    } as VampireDAAbilities;
  }

}
