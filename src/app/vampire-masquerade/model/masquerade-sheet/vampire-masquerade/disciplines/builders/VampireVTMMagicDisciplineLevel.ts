import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { CustomProperty } from 'src/app/shared/model/CustomProperty';
import { VampireVTMCustomPath } from '../VampireVTMCustomPath';
import { VampireVTMMagicDisciplineLevel } from './../VampireVTMMagicDisciplineLevel';

export class VampireVTMMagicDisciplineLevelBuidler extends BuilderTemplate<VampireVTMMagicDisciplineLevel> {
  protected defaultData(): VampireVTMMagicDisciplineLevel {
    return {
      level: 0,
      inBlood: false,
      paths: [] as VampireVTMCustomPath[],
      rituals: [] as CustomProperty[]
    } as VampireVTMMagicDisciplineLevel;
  }

}
