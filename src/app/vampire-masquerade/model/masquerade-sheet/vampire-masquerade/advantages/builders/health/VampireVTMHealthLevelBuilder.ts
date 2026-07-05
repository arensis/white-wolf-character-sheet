import { DarkAgesDamageType } from './../../../../../../../shared/model/dark-ages-sheet/advantages/health/DarkAgesDamageType';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { DarkAgesHealthLevel } from 'src/app/shared/model/dark-ages-sheet/advantages/health/DarkAgesHealthLevel';

export class VampireVTMHealthLevelBuilder extends BuilderTemplate<DarkAgesHealthLevel> {
  protected defaultData(): DarkAgesHealthLevel {
    return {
      penalty: 0,
      value: DarkAgesDamageType.EMPTY
    } as DarkAgesHealthLevel;
  }

  public penalty(penalty: number): VampireVTMHealthLevelBuilder {
      this._model.penalty = penalty;
      return this;
  }
}
