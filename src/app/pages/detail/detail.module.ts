import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './components/detail/detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { ContainerModule } from '../../layout/container/container.module';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    ContainerModule
  ]
})
export class DetailModule { }
