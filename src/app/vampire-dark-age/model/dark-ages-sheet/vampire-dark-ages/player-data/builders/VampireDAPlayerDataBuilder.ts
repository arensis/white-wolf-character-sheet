import { VampireDAInfoBuilder } from './VampireDAInfoBuilder';
import { VampireDAConceptBuilder } from './VampireDAConceptBuilder';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { VampireDAPlayerData } from '../VampireDAPlayerData';
import { VampireDABackgroundBuilder } from './VampireDABackgroundBuilder';

export class VampireDAPlayerDataBuilder extends BuilderTemplate<VampireDAPlayerData> {
  protected defaultData(): VampireDAPlayerData {
    return {
      background: new VampireDABackgroundBuilder().build(),
      concept: new VampireDAConceptBuilder().build(),
      info: new VampireDAInfoBuilder().build(),
    } as VampireDAPlayerData;
  }

}
