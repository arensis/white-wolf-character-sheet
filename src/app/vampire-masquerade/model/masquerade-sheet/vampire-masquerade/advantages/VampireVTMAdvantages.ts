import { Advantages } from "src/app/shared/model/sheet/advantages/Advantages";
import { DarkAgesHealth } from "src/app/shared/model/dark-ages-sheet/advantages/health/DarkAgesHealth";
import { VampireVTMBackgrounds } from "./VampireVTMBackgrounds";
import { VampireVTMBloodPool } from "./VampireVTMBloodPool";
import { VampireVTMPath } from "./path/VampireVTMPath";
import { VampireVTMVirtues } from "./VampireVTMVirtues";

export interface VampireVTMAdvantages extends Advantages {
  backgrounds: VampireVTMBackgrounds;
  virtues: VampireVTMVirtues;
  path: VampireVTMPath;
  bloodPool: VampireVTMBloodPool;
  health: DarkAgesHealth;
}
