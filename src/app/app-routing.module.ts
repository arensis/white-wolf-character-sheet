import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

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
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
