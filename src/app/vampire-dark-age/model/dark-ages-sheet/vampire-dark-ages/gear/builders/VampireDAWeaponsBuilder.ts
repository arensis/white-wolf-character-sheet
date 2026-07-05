import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { DarkAgesMeleeWeapons } from 'src/app/shared/model/dark-ages-sheet/gear/weapons/DarkAgesMeleeWeapons';
import { DarkAgesRangedWeapon } from 'src/app/shared/model/dark-ages-sheet/gear/weapons/DarkAgesRangedWeapon';
import { DarkAgesWeapons } from 'src/app/shared/model/dark-ages-sheet/gear/weapons/DarkAgesWeapons';

export class VampireDAWeaponsBuilder extends BuilderTemplate<DarkAgesWeapons> {
  protected defaultData(): DarkAgesWeapons {
    return {
      melee: [] as DarkAgesMeleeWeapons[],
      ranged: [] as DarkAgesRangedWeapon[]
    } as DarkAgesWeapons;
  }

}
