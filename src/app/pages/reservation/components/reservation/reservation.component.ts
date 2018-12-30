import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Training } from '../../../../models/training';
import { selectDetail } from '../../../detail/reducers/detail.reducer';

@Component({
  selector: 'usacademy-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  training: Observable<Training>;
  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.email),
    phone: new FormControl(null, Validators.required),
    note: new FormControl()
  });

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.training = this.store
      .pipe(
        select(selectDetail)
      );
  }

  postReservation(): void {
    console.log(this.form.value);
  }

}
