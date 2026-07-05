import { VampireDADisciplinesBuilder } from './disciplines/builders/VampireDADisciplines';
import { VampireDAAdvantagesBuilder } from './advantages/builders/VampireDAAdvantagesBuilder';
import { VampireDAAbilitiesBuilder } from './abilities/builders/VampireDAAbilitiesBuilder';
import { VampireDAAttributesBuilder } from './attributes/builders/VampireDAAttributesBuilder';
import { VampireDAPlayerDataBuilder } from './player-data/builders/VampireDAPlayerDataBuilder';
import { VampireDarkAgesSheet } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { VampireDAGearBuilder } from './gear/builders/VampireDAGearBuilder';

export class VampireDarkAgesSheetBuilder extends BuilderTemplate<VampireDarkAgesSheet> {
  protected defaultData(): VampireDarkAgesSheet {
    return {
      playerData: new VampireDAPlayerDataBuilder().build(),
      attributes: new VampireDAAttributesBuilder().build(),
      abilities: new VampireDAAbilitiesBuilder().build(),
      advantages: new VampireDAAdvantagesBuilder().build(),
      disciplines: new VampireDADisciplinesBuilder().build(),
      gear: new VampireDAGearBuilder().build(),
      notes: null,
      isEditable: true,
    } as VampireDarkAgesSheet;
  }

}
