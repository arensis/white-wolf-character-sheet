
import { createFeatureSelector } from "@ngrx/store";
import * as State from '../states/sheet.state';

export const getActiveShopListState = createFeatureSelector<State.SheetState>(State.sheetFeatureKey);
