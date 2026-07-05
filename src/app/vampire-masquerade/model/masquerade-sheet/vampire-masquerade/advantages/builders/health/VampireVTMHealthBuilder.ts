import { VampireVTMHealthLevelBuilder } from './VampireVTMHealthLevelBuilder';
import { DarkAgesHealth } from './../../../../../../../shared/model/dark-ages-sheet/advantages/health/DarkAgesHealth';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireVTMHealthBuilder extends BuilderTemplate<DarkAgesHealth> {
  protected defaultData(): DarkAgesHealth {
    return {
      bruised: new VampireVTMHealthLevelBuilder().build(),
      hurt:  new VampireVTMHealthLevelBuilder().penalty(-1).build(),
      injured: new VampireVTMHealthLevelBuilder().penalty(-1).build(),
      wounded: new VampireVTMHealthLevelBuilder().penalty(-2).build(),
      mauled: new VampireVTMHealthLevelBuilder().penalty(-2).build(),
      crippled: new VampireVTMHealthLevelBuilder().penalty(-5).build(),
      incapacitated: new VampireVTMHealthLevelBuilder().build(),
    } as DarkAgesHealth;
  }

}
