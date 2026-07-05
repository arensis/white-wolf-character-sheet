import { Experience } from './../../../../../../shared/model/sheet/advantages/Experience';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireVTMExperienceBuilder extends BuilderTemplate<Experience> {
  protected defaultData(): Experience {
    return {
      total: 0,
      current: 0
    } as Experience;
  }

}
