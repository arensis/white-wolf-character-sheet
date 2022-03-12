import { Action, createReducer, on } from "@ngrx/store";
import * as fromActions from '../actions/sheet.actions';
import * as SheetState from '../states/sheet.state';


const _counterReducer = createReducer(
  SheetState.initialState,
  on(fromActions.LoadSheetSuccessAction, (state, { action }) => ({
    ...state,
    ...action.payload
  }))
);

export function counterReducer(state: any, action: Action) {
  return _counterReducer(state, action);
}
