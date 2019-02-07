import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingTypeToStringPipe } from './pipes/training-type-to-string.pipe';
import { OccupancyPipe } from './pipes/occupancy.pipe';

@NgModule({
  declarations: [
    TrainingTypeToStringPipe,
    OccupancyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TrainingTypeToStringPipe,
    OccupancyPipe
  ]
})
export class PipesModule { }
