import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ReservationComponent } from './components/reservation/reservation.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationComponent
  }, {
    path: ':training',
    component: ReservationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ReservationRoutingModule { }
