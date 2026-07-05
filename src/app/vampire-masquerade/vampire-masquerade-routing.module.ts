import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VampireMasqueradeComponent } from './vampire-masquerade.component';
import { CreatorComponent } from './creation/creator.component';

const routes: Routes = [
  { path: 'create', component: CreatorComponent },
  { path: '', component: VampireMasqueradeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VampireMasqueradeRoutingModule { }
