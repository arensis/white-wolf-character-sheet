import { VampireVTMMagicDisciplineLevelBuidler } from './VampireVTMMagicDisciplineLevel';
import { VampireVTMDisciplines } from './../VampireVTMDisciplines';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { VampireVTMDisciplineLevelBuilder } from './VampireVTMDisciplineLevel';

export class VampireVTMDisciplinesBuilder extends BuilderTemplate<VampireVTMDisciplines> {
  protected defaultData(): VampireVTMDisciplines {
    return {
      animalism: new VampireVTMDisciplineLevelBuilder().build(),
      auspex: new VampireVTMDisciplineLevelBuilder().build(),
      celerity: new VampireVTMDisciplineLevelBuilder().build(),
      chimerstry: new VampireVTMDisciplineLevelBuilder().build(),
      dementation: new VampireVTMDisciplineLevelBuilder().build(),
      dominate: new VampireVTMDisciplineLevelBuilder().build(),

      fortitude: new VampireVTMDisciplineLevelBuilder().build(),
      necromancy: new VampireVTMMagicDisciplineLevelBuidler().build(),
      obfuscate: new VampireVTMDisciplineLevelBuilder().build(),
      obtenebration: new VampireVTMDisciplineLevelBuilder().build(),
      potence: new VampireVTMDisciplineLevelBuilder().build(),
      presence: new VampireVTMDisciplineLevelBuilder().build(),

      protean: new VampireVTMDisciplineLevelBuilder().build(),
      quietus: new VampireVTMDisciplineLevelBuilder().build(),
      serpentis: new VampireVTMDisciplineLevelBuilder().build(),
      thaumaturgy: new VampireVTMMagicDisciplineLevelBuidler().build(),
      vicissitude: new VampireVTMDisciplineLevelBuilder().build(),
    } as VampireVTMDisciplines;
  }
}
