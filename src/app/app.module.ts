import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroModule } from './layout/intro/intro.module';
import { API_URL, DOCUMENT, WINDOW } from './app.config';
import { FooterModule } from './layout/footer/footer.module';
import { HeaderModule } from './layout/header/header.module';
import { environment } from '../environments/environment';
import { ScrollToModule } from 'ng2-scroll-to-el';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IntroModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    HeaderModule,
    FooterModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    { provide: WINDOW, useValue: window },
    { provide: DOCUMENT, useValue: document },
    { provide: API_URL, useValue: environment.api }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
