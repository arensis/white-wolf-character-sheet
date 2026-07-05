import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { DarkAgesMeleeWeapons } from 'src/app/shared/model/dark-ages-sheet/gear/weapons/DarkAgesMeleeWeapons';

export class VampireVTMMeleeWeaponsBuilder extends BuilderTemplate<DarkAgesMeleeWeapons> {
  protected defaultData(): DarkAgesMeleeWeapons {
    return {
      name: '',
      diff: '',
      damage: '',
      range: 0,
      notes: '',
    } as DarkAgesMeleeWeapons;
  }

}
