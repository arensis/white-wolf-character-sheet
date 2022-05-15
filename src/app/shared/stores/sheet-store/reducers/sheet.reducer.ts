import { SheetState } from "../states/sheet.state";
import { SheetActionTypes } from "../actions/SheetActionTypes";
import * as State from "../states/sheet.state";
import * as fromActions from '../actions/sheet.actions';

export function sheetAppReducer(state: SheetState = State.initialState, action: fromActions.SheetActions): SheetState {
  switch (action.type) {
    case SheetActionTypes.LOAD_SHEET_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}
