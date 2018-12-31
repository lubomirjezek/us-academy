import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';

import { DataService } from '../services/data.service';
import { POST_RESERVATION, PostReservation, PostReservationError, PostReservationSuccess } from '../actions/reservation.actions';

@Injectable()
export class ReservationEffects {

  constructor(
    private actions: Actions,
    private dataService: DataService
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
}
