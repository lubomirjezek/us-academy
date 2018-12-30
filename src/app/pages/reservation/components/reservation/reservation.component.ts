import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Training } from '../../../../models/training';
import { selectDetail } from '../../../detail/reducers/detail.reducer';

@Component({
  selector: 'usacademy-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  training: Observable<Training>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.training = this.store
      .pipe(
        select(selectDetail)
      );
  }

}
