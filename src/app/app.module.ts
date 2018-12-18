import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroModule } from './layout/intro/intro.module';
import { HeaderModule } from './layout/header/header.module';
import { DOCUMENT, WINDOW } from './app.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IntroModule,
    HeaderModule
  ],
  providers: [
    { provide: WINDOW, useValue: window },
    { provide: DOCUMENT, useValue: document }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
