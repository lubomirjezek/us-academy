import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/homepage/homepage.module#HomepageModule'
  }, {
    path: 'gdpr',
    loadChildren: './pages/gdpr/gdpr.module#GdprModule'
  }, {
    path: 'podminky',
    loadChildren: './pages/conditions/conditions.module#ConditionsModule'
  }, {
    path: 'rezervace',
    loadChildren: './pages/reservation/reservation.module#ReservationModule'
  }, {
    path: ':city',
    loadChildren: './pages/detail/detail.module#DetailModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false
    }),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
