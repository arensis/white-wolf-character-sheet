import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { VampireDACustomPath } from '../VampireDACustomPath';

export class VampireDACustomPathBuilder extends BuilderTemplate<VampireDACustomPath> {
  protected defaultData(): VampireDACustomPath {
    return {
      inBlood: false
    } as VampireDACustomPath;
  }

}
