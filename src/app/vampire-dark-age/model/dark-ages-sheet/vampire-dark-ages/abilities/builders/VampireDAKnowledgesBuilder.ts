import { VampireDAKnowledges } from './../VampireDAKnowledges';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireDAKnowledgesBuilder extends BuilderTemplate<VampireDAKnowledges> {
  protected defaultData(): VampireDAKnowledges {
    return {
      law: 0,
      seneschal: 0,
      theology: 0,
      academics: 0,
      hearthWisdom: 0,
      linguistics: 0,
      occult: 0,
      politics: 0,
      customKnowledges: [],
      investigation: 0,
      medicine: 0,
    } as VampireDAKnowledges;
  }

}
