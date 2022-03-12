import { Action } from "@ngrx/store";
import { SheetActionTypes } from "./SheetActionTypes";

export class InitSheetAction implements Action {
  public readonly type = SheetActionTypes.INIT_SHEET;
  constructor() {}
}

export class LoadSheetAction implements Action {
  public readonly type = SheetActionTypes.INIT_SHEET;
  constructor(public payload?: any) {}
}

export class LoadSheetSuccessAction implements Action {
  public readonly type = SheetActionTypes.LOAD_SHEET_SUCCESS;
  constructor(public payload?: any) {}
}

export class ActionFailure implements Action {
  public readonly type = SheetActionTypes.ACTION_FAILURE;
  constructor(public error?: string) {}
}

export type SheetActions = InitSheetAction | LoadSheetAction | LoadSheetSuccessAction | ActionFailure;
