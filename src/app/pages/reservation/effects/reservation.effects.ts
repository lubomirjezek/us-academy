import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { DataService } from '../services/data.service';
import {
  POST_RESERVATION,
  POST_RESERVATION_SUCCESS,
  PostReservation,
  PostReservationError,
  PostReservationSuccess
} from '../actions/reservation.actions';
import { ModalService } from '../../../ui/modal/services/modal.service';
import { ReservationSuccessModalComponent } from '../components/reservation-success-modal/reservation-success-modal.component';

@Injectable()
export class ReservationEffects {

  constructor(
    private actions: Actions,
    private dataService: DataService,
    private modalService: ModalService
  ) { }

  @Effect()
  postReservation: Observable<Action> = this.actions
    .pipe(
      ofType(POST_RESERVATION),
      switchMap((action: PostReservation) => {
        return this.dataService
          .postReservation(action.payload)
          .pipe(
            map(response => new PostReservationSuccess(response)),
            catchError(response => of(new PostReservationError(response)))
          );
      }),
    );

  @Effect({ dispatch: false })
  postReservationSuccess: Observable<Action> = this.actions
    .pipe(
      ofType(POST_RESERVATION_SUCCESS),
      tap(() => {
        this.modalService.open(ReservationSuccessModalComponent, { width: '400px', height: '300px' });
      }),
    );
}
