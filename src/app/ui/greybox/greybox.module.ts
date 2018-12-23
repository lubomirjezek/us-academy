import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreyboxComponent } from './components/greybox/greybox.component';

@NgModule({
  declarations: [
    GreyboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreyboxComponent
  ]
})
export class GreyboxModule { }
