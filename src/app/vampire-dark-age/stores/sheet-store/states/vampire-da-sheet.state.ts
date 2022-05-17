import { VampireDarkAgesSheet } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';
import { createEntityAdapter } from "@ngrx/entity";
import { VampireDAAbilities } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/abilities/VampireDAAbilities';
import { VampireDAAdvantages } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/advantages/VampireDAAdvantages';
import { VampireDAAttributes } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/attributes/VampireDAAttributes';
import { VampireDAPlayerData } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/player-data/VampireDAPlayerData';
import { VampireDADisciplines } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/disciplines/VampireDADisciplines';
import { VampireDAGear } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/gear/VampireDAGear';


export const vampireDAsheetFeatureKey = 'vampireDAsheet';

export interface VampireDASheetState extends VampireDarkAgesSheet {}

export const adapter = createEntityAdapter<VampireDASheetState>();

export const initialState: VampireDASheetState = adapter.getInitialState({
  playerData: {} as VampireDAPlayerData,
  attributes: {} as VampireDAAttributes,
  abilities: {} as VampireDAAbilities,
  advantages: {} as VampireDAAdvantages,
  disciplines: {} as VampireDADisciplines,
  equipment: {} as VampireDAGear,
  isEditable: true
});
