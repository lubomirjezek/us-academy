import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoComponent } from './components/logo/logo.component';
import { SocialMediasComponent } from './components/social-medias/social-medias.component';

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
    RouterModule
  ]
})
export class HeaderModule { }
