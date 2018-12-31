import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ConditionsComponent } from './components/conditions/conditions.component';

const routes: Routes = [
  {
    path: '',
    component: ConditionsComponent
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
export class ConditionsRoutingModule { }
