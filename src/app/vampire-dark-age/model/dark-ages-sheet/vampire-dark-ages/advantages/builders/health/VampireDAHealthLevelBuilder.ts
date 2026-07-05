import { DarkAgesDamageType } from './../../../../../../../shared/model/dark-ages-sheet/advantages/health/DarkAgesDamageType';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { DarkAgesHealthLevel } from 'src/app/shared/model/dark-ages-sheet/advantages/health/DarkAgesHealthLevel';

export class VampireDAHealthLevelBuilder extends BuilderTemplate<DarkAgesHealthLevel> {
  protected defaultData(): DarkAgesHealthLevel {
    return {
      penalty: 0,
      value: DarkAgesDamageType.EMPTY
    } as DarkAgesHealthLevel;
  }

  public penalty(penalty: number): VampireDAHealthLevelBuilder {
      this._model.penalty = penalty;
      return this;
  }
}
