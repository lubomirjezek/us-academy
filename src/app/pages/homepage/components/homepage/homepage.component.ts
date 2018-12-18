import { Component, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'usacademy-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('expandIn', [
      state('false', style({ transform: 'scale(0)' })),
      state('true', style({ transform: 'scale(1)' })),
      transition('0 => 1', animate('1000ms 150ms cubic-bezier(.35,0,.25,1)', keyframes([
        style({ transform: 'scale(0)' }),
        style({ transform: 'scale(1.1)' }),
        style({ transform: 'scale(1)' }),
      ])))
    ])
  ]
})
export class HomepageComponent implements OnInit {

  isVisible = false;

  constructor() { }

  ngOnInit() { }

  onIntersection(event): void {
    this.isVisible = event.visible;
  }

}
