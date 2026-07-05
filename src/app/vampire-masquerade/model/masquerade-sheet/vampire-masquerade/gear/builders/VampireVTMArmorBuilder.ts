import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { DarkAgesArmor } from 'src/app/shared/model/dark-ages-sheet/gear/armors/DarkAgesArmor';

export class VampireVTMArmorBuilder extends BuilderTemplate<DarkAgesArmor> {
  protected defaultData(): DarkAgesArmor {
    return {
      movementPenalty: 0,
      minStrength: 0,
      class: '',
      protection: 0
    } as DarkAgesArmor;
  }

}
