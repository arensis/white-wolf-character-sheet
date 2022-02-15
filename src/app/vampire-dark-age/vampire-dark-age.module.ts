import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VampireDarkAgeRoutingModule } from './vampire-dark-age-routing.module';
import { VampireDarkAgeComponent } from './vampire-dark-age.component';
import { SharedModule } from '../shared/shared.module';
import { AttributesComponent } from './components/attributes/attributes.component';
import { PlayerDataComponent } from './components/player-data/player-data.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';


@NgModule({
  declarations: [
    VampireDarkAgeComponent,
    AttributesComponent,
    PlayerDataComponent,
    AbilitiesComponent
  ],
  imports: [
    CommonModule,
    VampireDarkAgeRoutingModule,
    SharedModule
  ]
})
export class VampireDarkAgeModule { }
