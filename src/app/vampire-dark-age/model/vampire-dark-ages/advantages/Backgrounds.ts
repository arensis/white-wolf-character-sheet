import { CustomProperty } from "../../../../shared/model/CustomProperty";

export interface Backgrounds {
  allies: number;
  contacts: number;
  domain: number;
  generation: number;
  herd: number;
  influence: number;
  mentor: number;
  resources: number;
  retainers: number;
  status: number;
  customBackgrounds: CustomProperty[];
}
