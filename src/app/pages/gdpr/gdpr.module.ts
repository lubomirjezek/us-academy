import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GdprComponent } from './components/gdpr/gdpr.component';
import { GdprRoutingModule } from './gdpr-routing.module';
import { HeaderModule } from '../../layout/header/header.module';
import { ContainerModule } from '../../layout/container/container.module';
import { FooterModule } from '../../layout/footer/footer.module';

@NgModule({
  declarations: [
    GdprComponent
  ],
  imports: [
    CommonModule,
    GdprRoutingModule,
    HeaderModule,
    ContainerModule,
    FooterModule
  ]
})
export class GdprModule { }
