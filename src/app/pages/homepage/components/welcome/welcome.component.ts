import { Component, OnDestroy, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fade } from '../../../../animations/fade.animation';

@Component({
  selector: 'parkouracademy-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        useAnimation(fade, {
          params: {
            opacityStart: 0,
            opacityEnd: 1,
            timings: '800ms cubic-bezier(.35,0,.25,1)'
          }
        })
      ])
    ]),
    trigger('fadeOut', [
      transition(':leave', [
        useAnimation(fade, {
          params: {
            opacityStart: 1,
            opacityEnd: 0,
            timings: '800ms cubic-bezier(.35,0,.25,1)'
          }
        })
      ])
    ])
  ]
})
export class WelcomeComponent implements OnInit, OnDestroy {
  destroy: Subject<null> = new Subject<null>();
  activeIndex = 0;

  constructor() { }

  ngOnInit() {
    interval(4000)
      .pipe(
        takeUntil(this.destroy)
      )
      .subscribe((value) => {
        this.activeIndex = (value + 1) % 2;
      });
  }

  ngOnDestroy() {
    this.destroy.next();
  }

}
