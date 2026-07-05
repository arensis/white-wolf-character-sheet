import { VampireVTMSheetStoreModule } from './stores/sheet-store/vampire-vtm-sheet-store.module';
import { NotesComponent } from './components/notes/notes.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { NgxEditorModule } from 'ngx-editor';
import { CommonModule } from '@angular/common';

import { VampireMasqueradeRoutingModule } from './vampire-masquerade-routing.module';
import { VampireMasqueradeComponent } from './vampire-masquerade.component';
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
import { DialogAddExperienceComponent } from './components/advantages/experience/dialog-add-experience/dialog-add-experience.component';
import { PathInfoDialogComponent } from './components/advantages/path/path-info-dialog/path-info-dialog.component';
import { VampireMasqueradeSheetStoreService } from './services/vampire-masquerade-sheet-store.service';
import { VtmCreationLabelPipe } from './pipes/vtm-creation-label.pipe';
import * as CreationComponents from './creation';



@NgModule({
  declarations: [
    VampireMasqueradeComponent,
    AttributesComponent,
    PlayerDataComponent,

    AbilitiesComponents.AbilitiesComponent,
    AbilitiesComponents.KnowledgesComponent,
    AbilitiesComponents.SkillsComponent,
    AbilitiesComponents.TalentsComponent,

    AdvantageComponents.AdvantagesComponent,
    AdvantageComponents.BackgroundsComponent,
    AdvantageComponents.BloodPoolComponent,
    AdvantageComponents.ExperienceComponent,
    AdvantageComponents.PathComponent,
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
    DialogAddExperienceComponent,
    PathInfoDialogComponent,

    DisciplineComponents.DisciplinesComponent,
    DisciplineComponents.NecromancyRitualsComponent,
    DisciplineComponents.NecromancyRoadsComponent,
    DisciplineComponents.ThaumaturgyRitualsComponent,
    DisciplineComponents.ThaumaturgyRoadsComponent,

    EquipementComponents.ArmorsComponent,
    EquipementComponents.EquipmentComponent,
    EquipementComponents.TravelEquipmentComponent,
    EquipementComponents.WeaponsComponent,

    NotesComponent,

    VtmCreationLabelPipe,

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
    VampireMasqueradeRoutingModule,
    VampireVTMSheetStoreModule,
    SharedModule,
    TranslateModule,
    NgxEditorModule
  ],
  providers: [
    VampireMasqueradeSheetStoreService,
    CreationComponents.CreationStateService,
    CreationComponents.CreationDialogService,
    CreationComponents.SpecialtyService,
    CreationComponents.DisciplineService,
    CreationComponents.BackgroundService,
    CreationComponents.SectService,
    CreationComponents.ClanService,
    CreationComponents.AbilityService,
    CreationComponents.AttributeService,
    CreationComponents.ArchetypeService
  ]
})
export class VampireMasqueradeModule { }
