import { VampireVTMMentalBuilder } from './VampireVTMMental';
import { VampireVTMSocialBuilder } from './VampireVTMSocial';
import { VampireVTMPhysicalBuilder } from './VampireVTMPhysicalBuilder';
import { VampireVTMAttributes } from 'src/app/vampire-masquerade/model/masquerade-sheet/vampire-masquerade/attributes/VampireVTMAttributes';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireVTMAttributesBuilder extends BuilderTemplate<VampireVTMAttributes> {
  protected defaultData(): VampireVTMAttributes {
    return {
      physical: new VampireVTMPhysicalBuilder().build(),
      social: new VampireVTMSocialBuilder().build(),
      mental: new VampireVTMMentalBuilder().build()
    } as VampireVTMAttributes;
  }

}
