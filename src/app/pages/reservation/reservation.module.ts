import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { ReservationComponent } from './components/reservation/reservation.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { ContainerModule } from '../../layout/container/container.module';
import { SelectedTrainingComponent } from './components/selected-training/selected-training.component';
import { GridModule } from '../../ui/grid/grid.module';
import { InputModule } from '../../ui/input/input.module';
import { ButtonModule } from '../../ui/button/button.module';
import { PipesModule } from '../../modules/pipes/pipes.module';
import { ListModule } from '../../ui/list/list.module';
import { ReservationEffects } from './effects/reservation.effects';
import { ModalModule } from '../../ui/modal/modal.module';
import { ReservationSuccessModalComponent } from './components/reservation-success-modal/reservation-success-modal.component';
import { IconModule } from '../../ui/icon/icon.module';

@NgModule({
  declarations: [
    ReservationComponent,
    SelectedTrainingComponent,
    ReservationSuccessModalComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    ContainerModule,
    GridModule,
    StoreModule,
    InputModule,
    ButtonModule,
    PipesModule,
    ListModule,
    ModalModule,
    EffectsModule.forFeature([
      ReservationEffects
    ]),
    RouterModule,
    IconModule
  ],
  entryComponents: [
    ReservationSuccessModalComponent
  ]
})
export class ReservationModule { }
