export interface VampireVTMBackground {
  nature: string;
  demeanor: string;
  clan: string;
  /** Sect id (creationVtm.sects.*), prefilled by the creator from the clan. */
  sect?: string;
  /** Clan weakness, auto-filled by the character creator. */
  weakness?: string;
}
