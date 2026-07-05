import { VampireVTMKnowledgesBuilder } from './VampireVTMKnowledgesBuilder';
import { VampireVTMSkillsBuilder } from './VampireVTMSkillsBuilder';
import { VampireVTMTalentsBuilder } from './VampireVTMTalentsBuilder';
import { VampireVTMAbilities } from './../VampireVTMAbilities';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireVTMAbilitiesBuilder extends BuilderTemplate<VampireVTMAbilities> {
  protected defaultData(): VampireVTMAbilities {
    return {
      talents: new VampireVTMTalentsBuilder().build(),
      skills: new VampireVTMSkillsBuilder().build(),
      knowledges: new VampireVTMKnowledgesBuilder().build()
    } as VampireVTMAbilities;
  }

}
