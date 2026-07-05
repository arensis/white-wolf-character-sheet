import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: 'vampire-the-masquerade',
    loadChildren: () => import('./vampire-masquerade/vampire-masquerade.module').then(m => m.VampireMasqueradeModule)
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
