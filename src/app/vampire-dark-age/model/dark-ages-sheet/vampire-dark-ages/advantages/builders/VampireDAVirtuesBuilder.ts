import { VampireDAVirtues } from './../VampireDAVirtues';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireDAVirtuesBuilder extends BuilderTemplate<VampireDAVirtues> {
  protected defaultData(): VampireDAVirtues {
    return {
      conscienceConviction: 1,
      selfControlInstint: 1,
      courage: 1
    } as VampireDAVirtues;
  }
}
