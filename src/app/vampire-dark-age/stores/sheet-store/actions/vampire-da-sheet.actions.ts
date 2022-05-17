import { Action } from "@ngrx/store";
import { VampireDASheetActionTypes } from "./VampireDASheetActionTypes";

export class LoadVampireDASheetAction implements Action {
  public readonly type = VampireDASheetActionTypes.LOAD_VAMPIRE_DA_SHEET;
  constructor(public payload?: any) {}
}

export type VampireDASheetActions =  LoadVampireDASheetAction;
