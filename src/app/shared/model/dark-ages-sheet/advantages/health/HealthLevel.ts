import { DamageType } from "./DamageType";

export interface HealthLevel {
  penalty: number;
  value: DamageType;
}
