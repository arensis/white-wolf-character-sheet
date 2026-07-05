import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { vampireDAsheetFeatureKey } from './states/vampire-da-sheet.state';
import { vampireDASheetAppReducer } from './reducers/vampire-da-sheet.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(vampireDAsheetFeatureKey, vampireDASheetAppReducer),
  ],
})
export class VampireDASheetStoreModule { }
