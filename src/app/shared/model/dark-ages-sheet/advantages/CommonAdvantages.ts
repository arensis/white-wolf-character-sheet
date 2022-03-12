import { CustomProperty } from "src/app/shared/model/CustomProperty";
import { CommonBackgrounds } from "./CommonBackgrounds";
import { CommonExperience } from "./CommonExperience";
import { CommonWillpower } from "./CommonWillpower";
import { CommonHealth } from "./health/CommonHealth";

export interface CommonAdvantages {
  backgrounds: CommonBackgrounds;
  willpower: CommonWillpower;
  experience: CommonExperience;
  health: CommonHealth;
  languages: CustomProperty[];
  merits: CustomProperty[];
  flaws: CustomProperty[];
}
