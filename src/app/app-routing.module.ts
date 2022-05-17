import { vampireDAsheetFeatureKey } from './vampire-dark-age/stores/sheet-store/states/vampire-da-sheet.state';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { vampireDASheetAppReducer } from './vampire-dark-age/stores/sheet-store/reducers/vampire-da-sheet.reducer';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/vampire-dark-ages',
    pathMatch: 'full'
  },
  { path: 'vampire-dark-ages',
    loadChildren: () => import('./vampire-dark-age/vampire-dark-age.module').then(m => m.VampireDarkAgeModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreModule.forFeature(vampireDAsheetFeatureKey, vampireDASheetAppReducer),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
