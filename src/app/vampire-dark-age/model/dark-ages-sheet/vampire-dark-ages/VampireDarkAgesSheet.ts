import { DarkAgesSheet } from "../../../../shared/model/dark-ages-sheet/DarkAgesSheet";
import { VampireDAAbilities } from "./abilities/VampireDAAbilities";
import { VampireDAAdvantages } from "./advantages/VampireDAAdvantages";
import { VampireDAAttributes } from "./attributes/VampireDAAttributes";
import { VampireDADisciplines } from "./disciplines/VampireDADisciplines";
import { VampireDAGear } from "./gear/VampireDAGear";
import { VampireDAPlayerData } from "./player-data/VampireDAPlayerData";

export interface VampireDarkAgesSheet extends DarkAgesSheet {
  playerData: VampireDAPlayerData;
  attributes: VampireDAAttributes;
  abilities: VampireDAAbilities;
  advantages: VampireDAAdvantages;
  disciplines: VampireDADisciplines;
  gear: VampireDAGear;
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
