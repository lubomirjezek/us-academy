import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { GridModule } from '../../ui/grid/grid.module';
import { IconModule } from '../../ui/icon/icon.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GridModule,
    IconModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
