import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { Social } from 'src/app/shared/model/sheet/attributes/Social';

export class VampireDASocialBuilder extends BuilderTemplate<Social> {
  protected defaultData(): Social {
    return {
      charisma: 1,
      manipulation: 1,
      appearance: 1
    } as Social;
  }
}
