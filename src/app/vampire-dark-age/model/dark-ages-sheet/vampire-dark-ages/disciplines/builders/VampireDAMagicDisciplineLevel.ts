import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { CustomProperty } from 'src/app/shared/model/CustomProperty';
import { VampireDACustomPath } from '../VampireDACustomPath';
import { VampireDAMagicDisciplineLevel } from './../VampireDAMagicDisciplineLevel';

export class VampireDAMagicDisciplineLevelBuidler extends BuilderTemplate<VampireDAMagicDisciplineLevel> {
  protected defaultData(): VampireDAMagicDisciplineLevel {
    return {
      paths: [] as VampireDACustomPath[],
      rituals: [] as CustomProperty[]
    } as VampireDAMagicDisciplineLevel;
  }

}
