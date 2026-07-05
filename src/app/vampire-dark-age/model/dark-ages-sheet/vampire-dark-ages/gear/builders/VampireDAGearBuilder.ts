import { VampireDAWeaponsBuilder } from './VampireDAWeaponsBuilder';
import { VampireDAShieldBuilder } from './VampireDAShieldBuilder';
import { VampireDAArmorBuilder } from './VampireDAArmorBuilder';
import { VampireDAGear } from './../VampireDAGear';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireDAGearBuilder extends BuilderTemplate<VampireDAGear> {
  protected defaultData(): VampireDAGear {
    return {
      travelEquipment: [] as string[],
      weapons: new VampireDAWeaponsBuilder().build(),
      armor: new VampireDAArmorBuilder().build(),
      shield: new VampireDAShieldBuilder().build()
    } as VampireDAGear;
  }

}
