import { VampireVTMDisciplinesBuilder } from './disciplines/builders/VampireVTMDisciplines';
import { VampireVTMAdvantagesBuilder } from './advantages/builders/VampireVTMAdvantagesBuilder';
import { VampireVTMAbilitiesBuilder } from './abilities/builders/VampireVTMAbilitiesBuilder';
import { VampireVTMAttributesBuilder } from './attributes/builders/VampireVTMAttributesBuilder';
import { VampireVTMPlayerDataBuilder } from './player-data/builders/VampireVTMPlayerDataBuilder';
import { VampireMasqueradeSheet } from 'src/app/vampire-masquerade/model/masquerade-sheet/vampire-masquerade/VampireMasqueradeSheet';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { VampireVTMGearBuilder } from './gear/builders/VampireVTMGearBuilder';

export class VampireMasqueradeSheetBuilder extends BuilderTemplate<VampireMasqueradeSheet> {
  protected defaultData(): VampireMasqueradeSheet {
    return {
      playerData: new VampireVTMPlayerDataBuilder().build(),
      attributes: new VampireVTMAttributesBuilder().build(),
      abilities: new VampireVTMAbilitiesBuilder().build(),
      advantages: new VampireVTMAdvantagesBuilder().build(),
      disciplines: new VampireVTMDisciplinesBuilder().build(),
      gear: new VampireVTMGearBuilder().build(),
      notes: null,
      isEditable: true,
    } as VampireMasqueradeSheet;
  }

}
