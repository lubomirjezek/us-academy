import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';

import { DataService } from '../services/data.service';
import { GET_DETAIL, GetDetail, GetDetailError, GetDetailSuccess } from '../actions/detail.actions';

@Injectable()
export class DetailEffects {

  constructor(
    private actions: Actions,
    private dataService: DataService
  ) { }

  @Effect()
  getDetail: Observable<Action> = this.actions
    .pipe(
      ofType(GET_DETAIL),
      switchMap((action: GetDetail) => {
        return this.dataService
          .getDetail(action.payload.id)
          .pipe(
            map(response => new GetDetailSuccess(response)),
            catchError(response => of(new GetDetailError(response)))
          );
      }),
    );
}
