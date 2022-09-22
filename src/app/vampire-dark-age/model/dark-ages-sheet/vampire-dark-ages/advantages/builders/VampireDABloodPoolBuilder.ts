import { VampireDABloodPool } from './../VampireDABloodPool';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireDABloodPoolBuilder extends BuilderTemplate<VampireDABloodPool> {
  protected defaultData(): VampireDABloodPool {
    return {
      max: 10,
      pool: 0
    } as VampireDABloodPool;
  }

}
