import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DetailComponent } from './components/detail/detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { ContainerModule } from '../../layout/container/container.module';
import { SlideModule } from '../../layout/slide/slide.module';
import { featureName, reducer } from './reducers/detail.reducer';
import { DetailEffects } from './effects/detail.effects';
import { InfoComponent } from './components/info/info.component';
import { ButtonModule } from '../../ui/button/button.module';

@NgModule({
  declarations: [
    DetailComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    ContainerModule,
    SlideModule,
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([
      DetailEffects
    ]),
    ButtonModule
  ]
})
export class DetailModule { }
