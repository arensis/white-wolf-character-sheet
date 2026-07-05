
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { VampireDAConcept } from '../VampireDAConcept';

export class VampireDAConceptBuilder extends BuilderTemplate<VampireDAConcept> {
  protected defaultData(): VampireDAConcept {
    return {
      generation: 12,
      concept: '',
      haven: '',
    } as VampireDAConcept;
  }

}
