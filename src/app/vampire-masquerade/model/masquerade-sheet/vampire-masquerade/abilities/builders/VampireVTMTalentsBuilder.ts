import { VampireVTMTalents } from './../VampireVTMTalents';
import { BuilderTemplate } from "src/app/shared/model/builder/BuilderTemplate";

export class VampireVTMTalentsBuilder extends BuilderTemplate<VampireVTMTalents> {
  protected defaultData(): VampireVTMTalents {
    return {
      alertness: 0,
      athletics: 0,
      awareness: 0,
      brawl: 0,
      emptahy: 0,
      expression: 0,
      intimidation: 0,
      leadership: 0,
      streetwise: 0,
      subterfuge: 0,
      customTalents: []
    } as VampireVTMTalents
  }
}
