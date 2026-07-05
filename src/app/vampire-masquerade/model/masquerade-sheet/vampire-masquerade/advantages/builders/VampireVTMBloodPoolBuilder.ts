import { VampireVTMBloodPool } from './../VampireVTMBloodPool';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireVTMBloodPoolBuilder extends BuilderTemplate<VampireVTMBloodPool> {
  protected defaultData(): VampireVTMBloodPool {
    return {
      max: 10,
      pool: 0
    } as VampireVTMBloodPool;
  }

}
