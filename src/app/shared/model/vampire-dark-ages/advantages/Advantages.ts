import { Backgrounds } from "./Backgrounds";
import { BloodPool } from "./BloodPool";
import { Experience } from "./Experience";
import { Health } from "./health/Health";
import { Road } from "./road/Road";
import { Virtues } from "./Virtues";
import { Willpower } from "./Willpower";

export interface Advantages {
  backgrounds: Backgrounds;
  virtues: Virtues;
  road: Road;
  willpower: Willpower;
  bloodPool: BloodPool;
  experience: Experience;
  health: Health;
  languages: string[];
  merits: string[];
  flaws: string[];
}
