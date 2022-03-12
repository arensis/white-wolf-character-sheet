import { CommonMental } from "./CommonMental";
import { CommonPhysical } from "./CommonPhysical";
import { CommonSocial } from "./CommonSocial";

export interface CommonAttributes {
  physical: CommonPhysical;
  social: CommonSocial;
  mental: CommonMental;
}
