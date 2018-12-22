import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { GdprComponent } from './components/gdpr/gdpr.component';

const routes: Routes = [
  {
    path: '',
    component: GdprComponent
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
export class GdprRoutingModule { }
