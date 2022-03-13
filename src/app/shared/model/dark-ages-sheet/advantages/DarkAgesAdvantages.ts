import { Advantages } from "../../sheet/advantages/Advantages";
import { DarkAgesBackgrounds } from "./DarkAgesBackgrounds";
import { DarkAgesHealth } from "./health/DarkAgesHealth";

export interface DarkAgesAdvantages extends Advantages {
  backgrounds: DarkAgesBackgrounds;
  health: DarkAgesHealth;
}
