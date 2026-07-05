
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { VampireVTMConcept } from '../VampireVTMConcept';

export class VampireVTMConceptBuilder extends BuilderTemplate<VampireVTMConcept> {
  protected defaultData(): VampireVTMConcept {
    return {
      generation: 13,
      concept: '',
      haven: '',
    } as VampireVTMConcept;
  }

}
