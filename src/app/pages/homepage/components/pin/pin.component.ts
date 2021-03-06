import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'parkouracademy-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {

  @HostBinding('style.left.%') @Input() x: number;
  @HostBinding('style.top.%') @Input() y: number;

  constructor() { }

  ngOnInit() { }

}
