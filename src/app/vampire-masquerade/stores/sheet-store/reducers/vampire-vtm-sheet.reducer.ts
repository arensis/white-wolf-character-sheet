import { VampireVTMSheetState } from "../states/vampire-vtm-sheet.state";
import { VampireVTMSheetActionTypes } from "../actions/VampireVTMSheetActionTypes";
import * as State from "../states/vampire-vtm-sheet.state";
import * as fromActions from '../actions/vampire-vtm-sheet.actions';

export function vampireVTMSheetAppReducer(state: VampireVTMSheetState = State.initialState, action: fromActions.VampireVTMSheetActions): VampireVTMSheetState {
  switch (action.type) {
    case VampireVTMSheetActionTypes.LOAD_VAMPIRE_VTM_SHEET:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}
