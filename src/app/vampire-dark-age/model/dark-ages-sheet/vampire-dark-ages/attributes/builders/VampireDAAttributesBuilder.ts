import { VampireDAMentalBuilder } from './VampireDAMental';
import { VampireDASocialBuilder } from './VampireDASocial';
import { VampireDAPhysicalBuilder } from './VampireDAPhysicalBuilder';
import { VampireDAAttributes } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/attributes/VampireDAAttributes';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireDAAttributesBuilder extends BuilderTemplate<VampireDAAttributes> {
  protected defaultData(): VampireDAAttributes {
    return {
      physical: new VampireDAPhysicalBuilder().build(),
      social: new VampireDASocialBuilder().build(),
      mental: new VampireDAMentalBuilder().build()
    } as VampireDAAttributes;
  }

}
