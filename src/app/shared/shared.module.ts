import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleInputComponent } from './circle-input/circle-input.component';
import { TextInputComponent } from './text-input/text-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CircleInputComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CircleInputComponent,
    TextInputComponent
  ]
})
export class SharedModule { }
