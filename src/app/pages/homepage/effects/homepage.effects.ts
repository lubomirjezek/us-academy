import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';
import {
  GET_CITY, GET_CITY_SUCCESS,
  GET_PINS,
  GetCity,
  GetCityError,
  GetCitySuccess,
  GetPins,
  GetPinsError,
  GetPinsSuccess
} from '../actions/homepage.actions';

@Injectable()
export class HomepageEffects {

  constructor(
    private actions: Actions,
    private dataService: DataService,
    private router: Router
  ) { }

  @Effect()
  getPins: Observable<Action> = this.actions
    .pipe(
      ofType(GET_PINS),
      switchMap((action: GetPins) => {
        return this.dataService
          .getPins()
          .pipe(
            map(response => new GetPinsSuccess(response)),
            catchError(response => of(new GetPinsError(response)))
          );
      }),
    );

  @Effect()
  getCity: Observable<Action> = this.actions
    .pipe(
      ofType(GET_CITY),
      switchMap((action: GetCity) => {
        return this.dataService
          .getCity(action.payload.id)
          .pipe(
            map(response => new GetCitySuccess(response)),
            catchError(response => of(new GetCityError(response)))
          );
      }),
    );

  @Effect({ dispatch: false })
  getCitySuccess: Observable<Action> = this.actions
    .pipe(
      ofType(GET_CITY_SUCCESS),
      delay(200),
      tap(() => {
        this.router.navigate(['/'], {
          fragment: 'terminy'
        });
      })
    );

}
