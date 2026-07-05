import { VampireVTMHealthBuilder } from './health/VampireVTMHealthBuilder';
import { VampireVTMWillpowerBuilder } from './VampireVTMWillpowerBuilder';
import { VampireVTMExperienceBuilder } from './VampireVTMExperienceBuilder';
import { VampireVTMBackgroundsBuilder } from './VampireVTMBackgroundsBuilder';
import { CustomProperty } from './../../../../../../shared/model/CustomProperty';
import { DarkAgesHealth } from './../../../../../../shared/model/dark-ages-sheet/advantages/health/DarkAgesHealth';
import { VampireVTMVirtuesBuilder } from './VampireVTMVirtuesBuilder';
import { VampireVTMBloodPoolBuilder } from './VampireVTMBloodPoolBuilder';
import { VampireVTMPathBuilder } from './path/VampireVTMPathBuilder';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { VampireVTMAdvantages } from '../VampireVTMAdvantages';
import { DarkAgesBackgrounds } from 'src/app/shared/model/dark-ages-sheet/advantages/DarkAgesBackgrounds';

export class VampireVTMAdvantagesBuilder extends BuilderTemplate<VampireVTMAdvantages> {
  protected defaultData(): VampireVTMAdvantages {
    return {
      virtues: new VampireVTMVirtuesBuilder().build(),
      path: new VampireVTMPathBuilder().build(),
      bloodPool: new VampireVTMBloodPoolBuilder().build(),
      backgrounds: new VampireVTMBackgroundsBuilder().build(),
      health: new VampireVTMHealthBuilder().build(),
      willpower: new VampireVTMWillpowerBuilder().build(),
      experience: new VampireVTMExperienceBuilder().build(),
      languages: [] as CustomProperty[],
      merits: [] as CustomProperty[],
      flaws: [] as CustomProperty[],

    } as VampireVTMAdvantages
  }

}
