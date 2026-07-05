import { VampireVTMWeaponsBuilder } from './VampireVTMWeaponsBuilder';
import { VampireVTMShieldBuilder } from './VampireVTMShieldBuilder';
import { VampireVTMArmorBuilder } from './VampireVTMArmorBuilder';
import { VampireVTMGear } from './../VampireVTMGear';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireVTMGearBuilder extends BuilderTemplate<VampireVTMGear> {
  protected defaultData(): VampireVTMGear {
    return {
      travelEquipment: [] as string[],
      weapons: new VampireVTMWeaponsBuilder().build(),
      armor: new VampireVTMArmorBuilder().build(),
      shield: new VampireVTMShieldBuilder().build()
    } as VampireVTMGear;
  }

}
