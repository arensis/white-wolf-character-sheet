import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { DarkAgesShield } from 'src/app/shared/model/dark-ages-sheet/gear/armors/DarkAgesShield';

export class VampireVTMShieldBuilder extends BuilderTemplate<DarkAgesShield> {
  protected defaultData(): DarkAgesShield {
    return {
      class: '',
      protection: 0
    } as DarkAgesShield;
  }

}
