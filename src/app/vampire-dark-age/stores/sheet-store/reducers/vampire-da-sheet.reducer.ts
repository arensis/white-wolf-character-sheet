import { VampireDASheetState } from "../states/vampire-da-sheet.state";
import { VampireDASheetActionTypes } from "../actions/VampireDASheetActionTypes";
import * as State from "../states/vampire-da-sheet.state";
import * as fromActions from '../actions/vampire-da-sheet.actions';

export function vampireDASheetAppReducer(state: VampireDASheetState = State.initialState, action: fromActions.VampireDASheetActions): VampireDASheetState {
  switch (action.type) {
    case VampireDASheetActionTypes.LOAD_VAMPIRE_DA_SHEET:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}
