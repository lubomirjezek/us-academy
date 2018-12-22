import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoComponent } from './components/logo/logo.component';
import { SocialMediasComponent } from './components/social-medias/social-medias.component';
import { IconModule } from '../../ui/icon/icon.module';
import { featureName, reducer } from './reducers/header.reducer';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    LogoComponent,
    SocialMediasComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    StoreModule.forFeature(featureName, reducer)
  ]
})
export class HeaderModule { }
