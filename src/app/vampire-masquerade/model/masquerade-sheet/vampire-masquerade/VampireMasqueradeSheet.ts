import { Sheet } from "../../../../shared/model/sheet/Sheet";
import { VampireVTMAbilities } from "./abilities/VampireVTMAbilities";
import { VampireVTMAdvantages } from "./advantages/VampireVTMAdvantages";
import { VampireVTMAttributes } from "./attributes/VampireVTMAttributes";
import { VampireVTMDisciplines } from "./disciplines/VampireVTMDisciplines";
import { VampireVTMGear } from "./gear/VampireVTMGear";
import { VampireVTMPlayerData } from "./player-data/VampireVTMPlayerData";

export interface VampireMasqueradeSheet extends Sheet {
  playerData: VampireVTMPlayerData;
  attributes: VampireVTMAttributes;
  abilities: VampireVTMAbilities;
  advantages: VampireVTMAdvantages;
  disciplines: VampireVTMDisciplines;
  gear: VampireVTMGear;
  isEditable: boolean;
  /** Chosen specialty names per ability member (up to 3; set by the creator). */
  specialties?: Record<string, string[]>;
  /** Chosen experience fields per generic ability (set by the creator). */
  experiences?: Record<string, string[]>;
  /** Merits and flaws selected during creation. */
  meritsFlaws?: { id: string; name: string; type: string; cost: number }[];
  /** Free-form notes as a ProseMirror JSON doc (never raw HTML). */
  notes?: Record<string, any> | null;
}
