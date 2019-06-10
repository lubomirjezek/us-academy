import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
  }, {
    path: 'gdpr',
    loadChildren: () => import('./pages/gdpr/gdpr.module').then(m => m.GdprModule)
  }, {
    path: 'podminky',
    loadChildren: () => import('./pages/conditions/conditions.module').then(m => m.ConditionsModule)
  }, {
    path: 'rezervace',
    loadChildren: () => import('./pages/reservation/reservation.module').then(m => m.ReservationModule)
  }, {
    path: ':city',
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
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
