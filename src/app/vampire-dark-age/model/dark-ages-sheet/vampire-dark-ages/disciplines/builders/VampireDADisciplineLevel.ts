import { VampireDADisciplineLevel } from './../VampireDADisciplineLevel';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireDADisciplineLevelBuilder extends BuilderTemplate<VampireDADisciplineLevel> {
  protected defaultData(): VampireDADisciplineLevel {
    return {
      level: 0,
      inBlood: false
    } as VampireDADisciplineLevel;
  }

}
