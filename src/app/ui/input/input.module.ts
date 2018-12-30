import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TextComponent } from './components/text/text.component';

@NgModule({
  declarations: [
    TextComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TextComponent
  ]
})
export class InputModule { }
