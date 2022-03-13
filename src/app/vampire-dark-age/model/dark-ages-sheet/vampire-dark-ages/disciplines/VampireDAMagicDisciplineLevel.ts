import { CustomProperty } from 'src/app/shared/model/CustomProperty';
import { VampireDACustomPath } from './VampireDACustomPath';
import { VampireDADisciplineLevel } from './VampireDADisciplineLevel';

export interface VampireDAMagicDisciplineLevel extends VampireDADisciplineLevel {
  paths: VampireDACustomPath[];
  rituals: CustomProperty[];
}
