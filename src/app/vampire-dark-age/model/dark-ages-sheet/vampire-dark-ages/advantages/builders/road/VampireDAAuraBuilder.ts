import { VampireDAAura } from './../../road/VampireDAAura';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
export class VampireDAAuraBuilder extends BuilderTemplate<VampireDAAura> {
  protected defaultData(): VampireDAAura {
    return {
      type: '',
      value: ''
    } as VampireDAAura;
  }
}
