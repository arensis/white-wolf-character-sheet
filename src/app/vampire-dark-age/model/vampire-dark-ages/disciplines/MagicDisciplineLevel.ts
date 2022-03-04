import { DisciplineLevel } from './DisciplineLevel';

export interface MagicDisciplineLevel extends DisciplineLevel {
  paths: string[];
  rituals: [];
}
