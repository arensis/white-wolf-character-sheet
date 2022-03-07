import { CustomProperty } from 'src/app/shared/model/CustomProperty';
import { DisciplineLevel } from './DisciplineLevel';

export interface MagicDisciplineLevel extends DisciplineLevel {
  paths: CustomProperty[];
  rituals: CustomProperty[];
}
