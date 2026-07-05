import { VampireDAAuraBuilder } from './VampireDAAuraBuilder';
import { VampireDARoad } from './../../road/VampireDARoad';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireDARoadBuilder extends BuilderTemplate<VampireDARoad> {
  protected defaultData(): VampireDARoad {
    return {
      name: '',
      level: 0,
      aura: new VampireDAAuraBuilder().build()
    } as VampireDARoad;
  }

}
