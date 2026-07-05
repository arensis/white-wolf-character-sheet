import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { Mental } from 'src/app/shared/model/sheet/attributes/Mental';

export class VampireDAMentalBuilder extends BuilderTemplate<Mental> {
  protected defaultData(): Mental {
    return {
      perception: 1,
      intelligence: 1,
      wits: 1
    } as Mental;
  }

}
