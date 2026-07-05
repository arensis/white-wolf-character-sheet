export interface ExperienceEntry {
  points: number;
  date: string;
  field: string;
}

export interface Experience {
  total: number;
  current: number;
  entries?: ExperienceEntry[];
}
