import { VampireDABackground } from './../VampireDABackground';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireDABackgroundBuilder extends BuilderTemplate<VampireDABackground> {
  protected defaultData(): VampireDABackground {
    return {
      nature: '',
      demeanor: '',
      clan: ''
    }as VampireDABackground;
  }

}
