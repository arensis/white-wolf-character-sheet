import { VampireDAHealthBuilder } from './health/VampireDAHealthBuilder';
import { VampireDAWillpowerBuilder } from './VampireDAWillpowerBuilder';
import { VampireDAExperienceBuilder } from './VampireDAExperienceBuilder';
import { VampireDABackgroundsBuilder } from './VampireDABackgroundsBuilder';
import { CustomProperty } from './../../../../../../shared/model/CustomProperty';
import { DarkAgesHealth } from './../../../../../../shared/model/dark-ages-sheet/advantages/health/DarkAgesHealth';
import { VampireDAVirtuesBuilder } from './VampireDAVirtuesBuilder';
import { VampireDABloodPoolBuilder } from './VampireDABloodPoolBuilder';
import { VampireDARoadBuilder } from './road/VampireDARoadBuilder';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { VampireDAAdvantages } from '../VampireDAAdvantages';
import { DarkAgesBackgrounds } from 'src/app/shared/model/dark-ages-sheet/advantages/DarkAgesBackgrounds';

export class VampireDAAdvantagesBuilder extends BuilderTemplate<VampireDAAdvantages> {
  protected defaultData(): VampireDAAdvantages {
    return {
      virtues: new VampireDAVirtuesBuilder().build(),
      road: new VampireDARoadBuilder().build(),
      bloodPool: new VampireDABloodPoolBuilder().build(),
      backgrounds: new VampireDABackgroundsBuilder().build(),
      health: new VampireDAHealthBuilder().build(),
      willpower: new VampireDAWillpowerBuilder().build(),
      experience: new VampireDAExperienceBuilder().build(),
      languages: [] as CustomProperty[],
      merits: [] as CustomProperty[],
      flaws: [] as CustomProperty[],

    } as VampireDAAdvantages
  }

}
