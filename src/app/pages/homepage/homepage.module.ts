import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InViewportModule } from 'ng-in-viewport';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { SlideModule } from '../../layout/slide/slide.module';
import { MapComponent } from './components/map/map.component';
import { PinComponent } from './components/pin/pin.component';
import { featureName, reducer } from './reducers/homepage.reducer';
import { HomepageEffects } from './effects/homepage.effects';
import { HeaderModule } from '../../layout/header/header.module';

@NgModule({
  declarations: [
    HomepageComponent,
    MapComponent,
    PinComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SlideModule,
    HeaderModule,
    InViewportModule,
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([
      HomepageEffects
    ])
  ]
})
export class HomepageModule { }
