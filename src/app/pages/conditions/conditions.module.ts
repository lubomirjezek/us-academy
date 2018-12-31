import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionsComponent } from './components/conditions/conditions.component';
import { ConditionsRoutingModule } from './conditions-routing.module';
import { ContainerModule } from '../../layout/container/container.module';

@NgModule({
  declarations: [
    ConditionsComponent
  ],
  imports: [
    CommonModule,
    ConditionsRoutingModule,
    ContainerModule
  ]
})
export class ConditionsModule { }
