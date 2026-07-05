import { VampireDAMagicDisciplineLevelBuidler } from './VampireDAMagicDisciplineLevel';
import { VampireDADisciplines } from './../VampireDADisciplines';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { VampireDADisciplineLevelBuilder } from './VampireDADisciplineLevel';

export class VampireDADisciplinesBuilder extends BuilderTemplate<VampireDADisciplines> {
  protected defaultData(): VampireDADisciplines {
    return {
      animalism: new VampireDADisciplineLevelBuilder().build(),
      auspex: new VampireDADisciplineLevelBuilder().build(),
      celerity: new VampireDADisciplineLevelBuilder().build(),
      dementation: new VampireDADisciplineLevelBuilder().build(),
      dominate: new VampireDADisciplineLevelBuilder().build(),
      quietus: new VampireDADisciplineLevelBuilder().build(),

      fortitude: new VampireDADisciplineLevelBuilder().build(),
      mortis: new VampireDAMagicDisciplineLevelBuidler().build(),
      obtenebration: new VampireDADisciplineLevelBuilder().build(),
      obfuscate: new VampireDADisciplineLevelBuilder().build(),
      potence: new VampireDADisciplineLevelBuilder().build(),
      presence: new VampireDADisciplineLevelBuilder().build(),

      protean: new VampireDADisciplineLevelBuilder().build(),
      chimerstry: new VampireDADisciplineLevelBuilder().build(),
      serpentis: new VampireDADisciplineLevelBuilder().build(),
      thaumaturgy: new VampireDAMagicDisciplineLevelBuidler().build(),
      vicissitude: new VampireDADisciplineLevelBuilder().build(),

      temporis: new VampireDADisciplineLevelBuilder().build(),
      daimoinon: new VampireDADisciplineLevelBuilder().build(),
    } as VampireDADisciplines;
  }

}
