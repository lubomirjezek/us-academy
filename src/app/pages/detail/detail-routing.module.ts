import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: DetailComponent
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
export class DetailRoutingModule { }
