import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingTypeToStringPipe } from './pipes/training-type-to-string.pipe';

@NgModule({
  declarations: [
    TrainingTypeToStringPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TrainingTypeToStringPipe
  ]
})
export class PipesModule { }
