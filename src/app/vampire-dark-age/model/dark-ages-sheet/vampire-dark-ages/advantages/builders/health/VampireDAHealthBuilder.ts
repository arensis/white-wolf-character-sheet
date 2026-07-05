import { VampireDAHealthLevelBuilder } from './VampireDAHealthLevelBuilder';
import { DarkAgesHealth } from './../../../../../../../shared/model/dark-ages-sheet/advantages/health/DarkAgesHealth';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireDAHealthBuilder extends BuilderTemplate<DarkAgesHealth> {
  protected defaultData(): DarkAgesHealth {
    return {
      bruised: new VampireDAHealthLevelBuilder().build(),
      hurt:  new VampireDAHealthLevelBuilder().penalty(-1).build(),
      injured: new VampireDAHealthLevelBuilder().penalty(-1).build(),
      wounded: new VampireDAHealthLevelBuilder().penalty(-2).build(),
      mauled: new VampireDAHealthLevelBuilder().penalty(-2).build(),
      crippled: new VampireDAHealthLevelBuilder().penalty(-5).build(),
      incapacitated: new VampireDAHealthLevelBuilder().build(),
    } as DarkAgesHealth;
  }

}
