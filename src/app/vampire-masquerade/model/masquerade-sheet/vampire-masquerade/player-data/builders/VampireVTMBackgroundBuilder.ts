import { VampireVTMBackground } from './../VampireVTMBackground';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireVTMBackgroundBuilder extends BuilderTemplate<VampireVTMBackground> {
  protected defaultData(): VampireVTMBackground {
    return {
      nature: '',
      demeanor: '',
      clan: '',
      sect: ''
    }as VampireVTMBackground;
  }

}
