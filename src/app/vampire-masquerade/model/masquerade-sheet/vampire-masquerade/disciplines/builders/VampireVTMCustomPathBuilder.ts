import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { VampireVTMCustomPath } from '../VampireVTMCustomPath';

export class VampireVTMCustomPathBuilder extends BuilderTemplate<VampireVTMCustomPath> {
  protected defaultData(): VampireVTMCustomPath {
    return {
      inBlood: false
    } as VampireVTMCustomPath;
  }

}
