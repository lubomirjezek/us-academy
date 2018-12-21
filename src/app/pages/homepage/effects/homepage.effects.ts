import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, delay, map, switchMap } from 'rxjs/operators';

import { DataService } from '../services/data.service';
import { GET_PINS, GetPins, GetPinsError, GetPinsSuccess } from '../actions/homepage.actions';

@Injectable()
export class HomepageEffects {

  constructor(
    private actions: Actions,
    private dataService: DataService
  ) { }

  @Effect()
  getCategoryCategories: Observable<Action> = this.actions
    .pipe(
      ofType(GET_PINS),
      switchMap((action: GetPins) => {
        return this.dataService
          .getPins()
          .pipe(
            delay(2000),
            map(response => new GetPinsSuccess(response)),
            catchError(response => of(new GetPinsError(response)))
          );
      }),
    );

}
