import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VampireDarkAgeComponent } from './vampire-dark-age.component';
import { CreatorComponent } from './creation/creator.component';

const routes: Routes = [
  { path: 'create', component: CreatorComponent },
  { path: '', component: VampireDarkAgeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VampireDarkAgeRoutingModule { }
