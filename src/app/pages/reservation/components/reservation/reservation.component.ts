import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Training } from '../../../../models/training';
import { selectDetail } from '../../../detail/reducers/detail.reducer';
import { filter, takeUntil } from 'rxjs/operators';
import { PostReservation } from '../../actions/reservation.actions';

@Component({
  selector: 'usacademy-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit, OnDestroy {
  destroy: Subject<null> = new Subject<null>();

  training: Training;
  form: FormGroup = new FormGroup({
    training_id: new FormControl(null, Validators.required),
    name:        new FormControl(null, Validators.required),
    parent:      new FormControl(null, Validators.required),
    email:       new FormControl(null, [Validators.required, Validators.email]),
    phone:       new FormControl(null, Validators.required),
    city:        new FormControl(null, Validators.required),
    postal_code: new FormControl(null, Validators.required),
    street:      new FormControl(null, Validators.required),
    insurance:   new FormControl(null, Validators.required),
    pid_number:  new FormControl(null, Validators.required),
    company:     new FormControl(),
    tin:         new FormControl(),
    vat:         new FormControl(),
    condition:   new FormControl(),
    text:        new FormControl()
  });

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store
      .pipe(
        select(selectDetail),
        takeUntil(this.destroy),
        filter(value => !!value)
      )
      .subscribe((value: Training) => {
        this.training = value;

        this.form.patchValue({
          training_id: value.id
        });
      });
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  postReservation(): void {
    this.store.dispatch(new PostReservation(this.form.value));
    this.form.reset();
  }

}
