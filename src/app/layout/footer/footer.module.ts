import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { GridModule } from '../../ui/grid/grid.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GridModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
