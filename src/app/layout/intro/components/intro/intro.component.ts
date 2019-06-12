import { Component, HostBinding, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';

import { fade } from '../../../../animations/fade.animation';

@Component({
  selector: 'parkouracademy-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        useAnimation(fade, {
          params: {
            opacityStart: 1,
            opacityEnd: 0,
            timings: '600ms cubic-bezier(.35,0,.25,1)'
          }
        })
      ])
    ])
  ]
})
export class IntroComponent implements OnInit {

  @HostBinding('@fadeOut') doAnimate = true;

  constructor() { }

  ngOnInit() { }

}
