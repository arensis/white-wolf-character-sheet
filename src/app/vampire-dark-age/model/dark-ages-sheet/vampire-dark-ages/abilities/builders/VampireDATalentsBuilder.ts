import { VampireDATalents } from './../VampireDATalents';
import { BuilderTemplate } from "src/app/shared/model/builder/BuilderTemplate";

export class VampireDATalentsBuilder extends BuilderTemplate<VampireDATalents> {
  protected defaultData(): VampireDATalents {
    return {
      leadership: 0,
      legerdemain: 0,
      dodge: 0,
      alertness: 0,
      athletics: 0,
      brawl: 0,
      emptahy: 0,
      expression: 0,
      intimidation: 0,
      subterfuge: 0,
      customTalents: []
    } as VampireDATalents
  }
}
