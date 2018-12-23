import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/homepage/homepage.module#HomepageModule'
  }, {
    path: 'gdpr',
    loadChildren: './pages/gdpr/gdpr.module#GdprModule'
  }/*, {
    path: 'detail',
    loadChildren: './pages/detail/detail.module#DetailModule'
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      enableTracing: false,
      onSameUrlNavigation: 'reload'
    }),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
