import { VampireVTMSkills } from './../VampireVTMSkills';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireVTMSkillsBuilder extends BuilderTemplate<VampireVTMSkills> {
  protected defaultData(): VampireVTMSkills {
    return {
      animalKen: 0,
      crafts: 0,
      drive: 0,
      etiquette: 0,
      firearms: 0,
      larceny: 0,
      melee: 0,
      performance: 0,
      stealth: 0,
      survival: 0,
      customSkills: []
    } as VampireVTMSkills
  }
}
