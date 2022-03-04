import { HealthLevel } from "./HealthLevel";

export interface Health {
  bruised: HealthLevel;
  hurt: HealthLevel;
  injured: HealthLevel;
  wounded: HealthLevel;
  mauled: HealthLevel;
  crippled: HealthLevel;
  incapacitated: HealthLevel;
}
