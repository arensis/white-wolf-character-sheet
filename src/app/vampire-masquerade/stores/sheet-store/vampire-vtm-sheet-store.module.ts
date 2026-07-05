import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { vampireVTMsheetFeatureKey } from './states/vampire-vtm-sheet.state';
import { vampireVTMSheetAppReducer } from './reducers/vampire-vtm-sheet.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(vampireVTMsheetFeatureKey, vampireVTMSheetAppReducer),
  ],
})
export class VampireVTMSheetStoreModule { }
