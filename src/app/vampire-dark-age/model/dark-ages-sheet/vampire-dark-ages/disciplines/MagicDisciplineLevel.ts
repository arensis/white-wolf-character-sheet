import { CustomProperty } from 'src/app/shared/model/CustomProperty';
import { CustomPath } from './CustomPath';
import { DisciplineLevel } from './DisciplineLevel';

export interface MagicDisciplineLevel extends DisciplineLevel {
  paths: CustomPath[];
  rituals: CustomProperty[];
}
