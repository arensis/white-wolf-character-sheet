import { VampireDASkills } from './../VampireDASkills';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireDASkillsBuilder extends BuilderTemplate<VampireDASkills> {
  protected defaultData(): VampireDASkills {
    return {
      commerce: 0,
      animalKen: 0,
      archery: 0,
      ride: 0,
      survival: 0,
      customSkills: [],
      crafts: 0,
      etiquette: 0,
      melee: 0,
      performance: 0,
      stealth: 0
    } as VampireDASkills
  }

}
