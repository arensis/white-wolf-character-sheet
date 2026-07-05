import { VampireVTMKnowledges } from './../VampireVTMKnowledges';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireVTMKnowledgesBuilder extends BuilderTemplate<VampireVTMKnowledges> {
  protected defaultData(): VampireVTMKnowledges {
    return {
      academics: 0,
      computer: 0,
      finance: 0,
      investigation: 0,
      law: 0,
      medicine: 0,
      occult: 0,
      politics: 0,
      science: 0,
      technology: 0,
      customKnowledges: []
    } as VampireVTMKnowledges;
  }
}
