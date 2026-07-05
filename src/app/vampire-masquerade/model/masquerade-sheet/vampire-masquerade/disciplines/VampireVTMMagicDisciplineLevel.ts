import { CustomProperty } from 'src/app/shared/model/CustomProperty';
import { VampireVTMCustomPath } from './VampireVTMCustomPath';
import { VampireVTMDisciplineLevel } from './VampireVTMDisciplineLevel';

export interface VampireVTMMagicDisciplineLevel extends VampireVTMDisciplineLevel {
  paths: VampireVTMCustomPath[];
  rituals: CustomProperty[];
}
