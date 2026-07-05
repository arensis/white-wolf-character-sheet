import { CustomProperty } from "../../CustomProperty";
import { Backgrounds } from "./Backgrounds";
import { Experience } from "./Experience";
import { Willpower } from "./Willpower";

export interface Advantages {
  backgrounds: Backgrounds;
  willpower: Willpower;
  experience: Experience;
  languages: CustomProperty[];
  merits: CustomProperty[];
  flaws: CustomProperty[];
}
