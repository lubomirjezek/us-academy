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
import { PipesModule } from '../../modules/pipes/pipes.module';
import { GridModule } from '../../ui/grid/grid.module';
import { ContentComponent } from './components/content/content.component';
import { ListModule } from '../../ui/list/list.module';
import { InputModule } from '../../ui/input/input.module';

@NgModule({
  declarations: [
    DetailComponent,
    InfoComponent,
    ContentComponent
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
    ButtonModule,
    PipesModule,
    GridModule,
    ListModule,
    InputModule
  ]
})
export class DetailModule { }
