
import { createFeatureSelector } from "@ngrx/store";
import * as State from '../states/vampire-da-sheet.state';

export const getVampireDASheetState = createFeatureSelector<State.VampireDASheetState>(State.vampireDAsheetFeatureKey);
