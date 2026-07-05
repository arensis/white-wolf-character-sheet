
import { DarkAgesAdvantages } from "src/app/shared/model/dark-ages-sheet/advantages/DarkAgesAdvantages";
import { VampireDABloodPool } from "./VampireDABloodPool";
import { VampireDARoad } from "./road/VampireDARoad";
import { VampireDAVirtues } from "./VampireDAVirtues";

export interface VampireDAAdvantages extends DarkAgesAdvantages {
  virtues: VampireDAVirtues;
  road: VampireDARoad;
  bloodPool: VampireDABloodPool;
}
