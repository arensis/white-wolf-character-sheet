import { DialogAddNewPropertyComponent } from './components/dialog-add-new-property/dialog-add-new-property.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleInputComponent } from './components/circle-input/circle-input.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  declarations: [
    CircleInputComponent,
    TextInputComponent,
    DialogAddNewPropertyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ],
  exports: [
    CircleInputComponent,
    TextInputComponent,
    DialogAddNewPropertyComponent,
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ]
})
export class SharedModule { }
