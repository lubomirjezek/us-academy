import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Training } from '../../../../models/training';
import { selectDetail } from '../../../detail/reducers/detail.reducer';
import { filter, takeUntil } from 'rxjs/operators';
import { PostReservation } from '../../actions/reservation.actions';
import { ReservationSuccessModalComponent } from '../reservation-success-modal/reservation-success-modal.component';
import { ModalService } from '../../../../ui/modal/services/modal.service';

@Component({
  selector: 'usacademy-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit, OnDestroy {
  destroy: Subject<null> = new Subject<null>();

  training: Training;
  form: FormGroup = new FormGroup({
    training_id:        new FormControl(null, Validators.required),
    name:               new FormControl(null, Validators.required),
    parent:             new FormControl(null, Validators.required),
    email:              new FormControl(null, [Validators.required, Validators.email]),
    phone:              new FormControl(null, Validators.required),
    condition:          new FormControl(),
    text:               new FormControl(null, Validators.required),
    company:            new FormControl(null, Validators.required),
    street:             new FormControl(null, Validators.required),
    city:               new FormControl(null, Validators.required),
    postal_code:        new FormControl(null, Validators.required),
    tin:                new FormControl(null, Validators.required),
    vat:                new FormControl(null, Validators.required),
    gdpr_consent:       new FormControl(false, Validators.requiredTrue),
    conditions_consent: new FormControl(false, Validators.requiredTrue)
  });
  errors: { [key: string]: { [key: string]: string } } = {
    name: {
      required: 'Zadejte jméno a příjmení účastníka.',
    },
    parent: {
      required: 'Zadejte jméno a příjmení zákonného zástupce účastníka.',
    },
    email: {
      required: 'Zadejte e-mailovou adresu přes kterou Vás budete kontaktovat.',
      email: 'Zadejte validní e-mailovou adresu.'
    },
    phone: {
      required: 'Zadejte svoje telefonní číslo přes které Vás můžeme kontaktovat.',
    },
    insurance: {
      required: 'Zadejte název zdravotní pojišťovny u které je účastník registrovaný,',
    },
    pid_number: {
      required: 'Zadejte rodné číslo účastníka.',
    },
  };

  constructor(
    private store: Store<any>,
    private modalService: ModalService
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

        this.form.reset();

        if (value.type === 2) {
          this.form.addControl('insurance', new FormControl(null, Validators.required));
          this.form.addControl('pid_number', new FormControl(null, Validators.required));
        }

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
