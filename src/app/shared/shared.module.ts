import { AddCustomPropertyButtonComponent } from './components/add-custom-property-button/add-custom-property-button.component';
import { DialogAddNewPropertyComponent } from './components/dialog-add-new-property/dialog-add-new-property.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleInputComponent } from './components/circle-input/circle-input.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    CircleInputComponent,
    InputComponent,
    DialogAddNewPropertyComponent,
    AddCustomPropertyButtonComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ],
  exports: [
    CircleInputComponent,
    InputComponent,
    DialogAddNewPropertyComponent,
    AddCustomPropertyButtonComponent,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ]
})
export class SharedModule { }
