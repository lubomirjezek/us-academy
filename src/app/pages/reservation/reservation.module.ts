import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { ReservationComponent } from './components/reservation/reservation.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { ContainerModule } from '../../layout/container/container.module';
import { SelectedTrainingComponent } from './components/selected-training/selected-training.component';
import { GridModule } from '../../ui/grid/grid.module';

@NgModule({
  declarations: [
    ReservationComponent,
    SelectedTrainingComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    ContainerModule,
    GridModule,
    StoreModule
  ]
})
export class ReservationModule { }
