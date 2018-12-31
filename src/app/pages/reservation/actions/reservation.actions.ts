import { Action } from '@ngrx/store';

import { Reservation } from '../../../models/reservation';

export const POST_RESERVATION         = '[Reservation] POST reservation';
export const POST_RESERVATION_SUCCESS = '[Reservation] POST reservation success';
export const POST_RESERVATION_ERROR   = '[Reservation] POST reservation error';

export class PostReservation implements Action {
  readonly type = POST_RESERVATION;

  constructor(public payload: Reservation) { }
}

export class PostReservationSuccess implements Action {
  readonly type = POST_RESERVATION_SUCCESS;

  constructor(public payload: { message: string }) { }
}

export class PostReservationError implements Action {
  readonly type = POST_RESERVATION_ERROR;

  constructor(public payload: { message: string }) { }
}

export type All
  = PostReservation
  | PostReservationSuccess
  | PostReservationError;
