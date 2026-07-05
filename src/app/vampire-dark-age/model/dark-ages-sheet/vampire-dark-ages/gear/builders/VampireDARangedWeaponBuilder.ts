import { BuilderTemplate } from './../../../../../../shared/model/builder/BuilderTemplate';
import { DarkAgesRangedWeapon } from './../../../../../../shared/model/dark-ages-sheet/gear/weapons/DarkAgesRangedWeapon';

export class VampireDARangedWeaponBuilder extends BuilderTemplate<DarkAgesRangedWeapon> {
  protected defaultData(): DarkAgesRangedWeapon {
    return {
      rate: '',
      ammo: 0,
      minStrength: 0,
      name: '',
      diff: '',
      damage: '',
      range: 0,
      notes: ''
    } as DarkAgesRangedWeapon;
  }

}
