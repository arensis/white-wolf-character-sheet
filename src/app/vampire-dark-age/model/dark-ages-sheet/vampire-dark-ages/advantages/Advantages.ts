
import { CommonAdvantages } from "src/app/shared/model/dark-ages-sheet/advantages/CommonAdvantages";
import { BloodPool } from "./BloodPool";
import { Road } from "./road/Road";
import { Virtues } from "./Virtues";

export interface Advantages extends CommonAdvantages {
  virtues: Virtues;
  road: Road;
  bloodPool: BloodPool;
}
