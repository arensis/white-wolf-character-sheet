import { VampireVTMInfoBuilder } from './VampireVTMInfoBuilder';
import { VampireVTMConceptBuilder } from './VampireVTMConceptBuilder';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { VampireVTMPlayerData } from '../VampireVTMPlayerData';
import { VampireVTMBackgroundBuilder } from './VampireVTMBackgroundBuilder';

export class VampireVTMPlayerDataBuilder extends BuilderTemplate<VampireVTMPlayerData> {
  protected defaultData(): VampireVTMPlayerData {
    return {
      background: new VampireVTMBackgroundBuilder().build(),
      concept: new VampireVTMConceptBuilder().build(),
      info: new VampireVTMInfoBuilder().build(),
    } as VampireVTMPlayerData;
  }

}
