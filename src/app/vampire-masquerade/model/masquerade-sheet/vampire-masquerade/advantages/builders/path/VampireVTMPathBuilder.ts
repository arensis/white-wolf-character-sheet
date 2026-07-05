import { VampireVTMBearingBuilder } from './VampireVTMBearingBuilder';
import { VampireVTMPath } from './../../path/VampireVTMPath';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireVTMPathBuilder extends BuilderTemplate<VampireVTMPath> {
  protected defaultData(): VampireVTMPath {
    return {
      name: '',
      level: 0,
      bearing: new VampireVTMBearingBuilder().build()
    } as VampireVTMPath;
  }
}
