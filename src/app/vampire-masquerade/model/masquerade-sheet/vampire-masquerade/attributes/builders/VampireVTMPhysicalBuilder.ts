
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { Physical } from 'src/app/shared/model/sheet/attributes/Physical';

export class VampireVTMPhysicalBuilder extends BuilderTemplate<Physical> {
  protected defaultData(): Physical {
    return {
      strength: 1,
      dexterity: 1,
      stamina: 1
    } as Physical;
  }

}
