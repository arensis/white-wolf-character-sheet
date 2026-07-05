import { Action } from "@ngrx/store";
import { VampireVTMSheetActionTypes } from "./VampireVTMSheetActionTypes";

export class LoadVampireVTMSheetAction implements Action {
  public readonly type = VampireVTMSheetActionTypes.LOAD_VAMPIRE_VTM_SHEET;
  constructor(public payload?: any) {}
}

export type VampireVTMSheetActions =  LoadVampireVTMSheetAction;
