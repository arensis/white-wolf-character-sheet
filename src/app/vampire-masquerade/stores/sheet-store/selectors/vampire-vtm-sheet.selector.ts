
import { createFeatureSelector } from "@ngrx/store";
import * as State from '../states/vampire-vtm-sheet.state';

export const getVampireVTMSheetState = createFeatureSelector<State.VampireVTMSheetState>(State.vampireVTMsheetFeatureKey);
