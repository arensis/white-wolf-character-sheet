import { VampireVTMBearing } from './../../path/VampireVTMBearing';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireVTMBearingBuilder extends BuilderTemplate<VampireVTMBearing> {
  protected defaultData(): VampireVTMBearing {
    return {
      type: '',
      value: ''
    } as VampireVTMBearing;
  }
}
