import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { CustomProperty } from 'src/app/shared/model/CustomProperty';
import { VampireVTMBackgrounds } from '../VampireVTMBackgrounds';

export class VampireVTMBackgroundsBuilder extends BuilderTemplate<VampireVTMBackgrounds> {
  protected defaultData(): VampireVTMBackgrounds {
    return {
      allies: 0,
      alternateIdentity: 0,
      blackHandMembership: 0,
      contacts: 0,
      domain: 0,
      fame: 0,
      generation: 0,
      herd: 0,
      influence: 0,
      mentor: 0,
      resources: 0,
      retainers: 0,
      rituals: 0,
      status: 0,
      customBackgrounds: [] as CustomProperty[]
    } as VampireVTMBackgrounds;
  }
}
