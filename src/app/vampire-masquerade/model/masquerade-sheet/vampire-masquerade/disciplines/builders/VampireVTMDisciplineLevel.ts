import { VampireVTMDisciplineLevel } from './../VampireVTMDisciplineLevel';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireVTMDisciplineLevelBuilder extends BuilderTemplate<VampireVTMDisciplineLevel> {
  protected defaultData(): VampireVTMDisciplineLevel {
    return {
      level: 0,
      inBlood: false
    } as VampireVTMDisciplineLevel;
  }

}
