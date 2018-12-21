import { Component, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Pin } from '../../../../models/pin';
import { selectPins } from '../../reducers/homepage.reducer';
import { GetPins } from '../../actions/homepage.actions';

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
  pins: Observable<Pin[]>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.pins = this.store
      .pipe(
        select(selectPins)
      );

    this.fetchPins();
  }

  onIntersection(event): void {
    this.isVisible = event.visible;
  }

  fetchPins(): void {
    this.store
      .dispatch(new GetPins());
  }

}
