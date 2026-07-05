import { VampireDASheetStoreModule } from './stores/sheet-store/vampire-da-sheet-store.module';
import { NotesComponent } from './components/notes/notes.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { NgxEditorModule } from 'ngx-editor';
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
import { DialogAddMeritFlawComponent } from './components/advantages/other-advantages/components/dialog-add-merit-flaw/dialog-add-merit-flaw.component';
import { DialogAddLanguageComponent } from './components/advantages/other-advantages/components/dialog-add-language/dialog-add-language.component';
import { RoadInfoDialogComponent } from './components/advantages/road/road-info-dialog/road-info-dialog.component';
import { DialogAddExperienceComponent } from './components/advantages/experience/dialog-add-experience/dialog-add-experience.component';
import * as CreationComponents from './creation';


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
    DialogAddMeritFlawComponent,
    DialogAddLanguageComponent,
    RoadInfoDialogComponent,
    DialogAddExperienceComponent,

    DisciplineComponents.DisciplinesComponent,
    DisciplineComponents.MortisRitualsComponent,
    DisciplineComponents.MortisRoadsComponent,
    DisciplineComponents.ThaumaturgyRitualsComponent,
    DisciplineComponents.ThaumaturgyRoadsComponent,

    EquipementComponents.ArmorsComponent,
    EquipementComponents.EquipmentComponent,
    EquipementComponents.TravelEquipmentComponent,
    EquipementComponents.WeaponsComponent,

    NotesComponent,

    CreationComponents.CreatorComponent,
    CreationComponents.CreationDotsComponent,
    CreationComponents.InfoIconComponent,
    CreationComponents.InfoDialogComponent,
    CreationComponents.ConceptStepComponent,
    CreationComponents.AttributesStepComponent,
    CreationComponents.AbilitiesStepComponent,
    CreationComponents.AdvantagesStepComponent,
    CreationComponents.FinishingStepComponent,
    CreationComponents.CreationLabelPipe
  ],
  imports: [
    CommonModule,
    VampireDarkAgeRoutingModule,
    VampireDASheetStoreModule,
    SharedModule,
    TranslateModule,
    NgxEditorModule
  ],
  providers: [
    CreationComponents.CreationStateService,
    CreationComponents.CreationDialogService,
    CreationComponents.SpecialtyService,
    CreationComponents.DisciplineService,
    CreationComponents.BackgroundService,
    CreationComponents.ClanService
  ]
})
export class VampireDarkAgeModule { }
