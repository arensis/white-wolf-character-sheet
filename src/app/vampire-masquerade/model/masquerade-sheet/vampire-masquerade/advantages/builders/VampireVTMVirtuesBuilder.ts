import { VampireVTMVirtues } from './../VampireVTMVirtues';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireVTMVirtuesBuilder extends BuilderTemplate<VampireVTMVirtues> {
  protected defaultData(): VampireVTMVirtues {
    return {
      conscienceConviction: 1,
      selfControlInstint: 1,
      courage: 1
    } as VampireVTMVirtues;
  }
}
