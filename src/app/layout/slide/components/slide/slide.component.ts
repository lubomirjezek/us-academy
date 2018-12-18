import { Component, HostBinding, HostListener, Inject, OnInit } from '@angular/core';

import { DOCUMENT } from '../../../../app.config';

@Component({
  selector: 'usacademy-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @HostBinding('style.height.px') height: number;
  @HostBinding('style.width.px') width: number;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    // this.width  = this.document.documentElement.clientWidth;
    this.height = this.document.documentElement.clientHeight;
  }

  ngOnInit() { }

  @HostListener('window:resize')
  onResize(): void {
    // this.width  = this.document.documentElement.clientWidth;
    this.height = this.document.documentElement.clientHeight;
  }

}
