import { VampireDASheetStoreModule } from './stores/sheet-store/vampire-da-sheet-store.module';
import { NotesComponent } from './components/notes/notes.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VampireDarkAgeRoutingModule } from './vampire-dark-age-routing.module';
import { VampireDarkAgeComponent } from './vampire-dark-age.component';
import { SharedModule } from '../shared/shared.module';
import { AttributesComponent } from './components/attributes/attributes.component';
import { PlayerDataComponent } from './components/player-data/player-data.component';
import * as AbilitiesComponents from './components/abilities';
import * as AdvantageComponents from './components/advantages';
import * as DisciplineComponents from './components/disciplines';
import * as EquipementComponents from './components/equipment'
import * as OtherAdvantages from './components/advantages/other-advantages';


@NgModule({
  declarations: [
    VampireDarkAgeComponent,
    AttributesComponent,
    PlayerDataComponent,

    AbilitiesComponents.AbilitiesComponent,
    AbilitiesComponents.KnowledgesComponent,
    AbilitiesComponents.SkillsComponent,
    AbilitiesComponents.TalentsComponent,

    AdvantageComponents.AdvantagesComponent,
    AdvantageComponents.BackgroundsComponent,
    AdvantageComponents.BloodPoolComponent,
    AdvantageComponents.BloodPoolComponent,
    AdvantageComponents.ExperienceComponent,
    AdvantageComponents.FlawsComponent,
    AdvantageComponents.MeritsComponent,
    AdvantageComponents.RoadComponent,
    AdvantageComponents.VirtuesComponent,
    AdvantageComponents.WillpowerComponent,
    AdvantageComponents.WeaknessComponent,
    AdvantageComponents.HealthComponent,
    OtherAdvantages.FlawsComponent,
    OtherAdvantages.LanguagesComponent,
    OtherAdvantages.MeritsComponent,
    OtherAdvantages.OtherAdvantagesComponent,

    DisciplineComponents.DisciplinesComponent,
    DisciplineComponents.MortisRitualsComponent,
    DisciplineComponents.MortisRoadsComponent,
    DisciplineComponents.ThaumaturgyRitualsComponent,
    DisciplineComponents.ThaumaturgyRoadsComponent,

    EquipementComponents.ArmorsComponent,
    EquipementComponents.EquipmentComponent,
    EquipementComponents.TravelEquipmentComponent,
    EquipementComponents.WeaponsComponent,

    NotesComponent
  ],
  imports: [
    CommonModule,
    VampireDarkAgeRoutingModule,
    VampireDASheetStoreModule,
    SharedModule,
    TranslateModule
  ]
})
export class VampireDarkAgeModule { }
