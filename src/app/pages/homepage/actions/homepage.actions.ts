import { Action } from '@ngrx/store';

import { Pin } from '../../../models/pin';

export const GET_PINS         = '[Homepage] GET pins';
export const GET_PINS_SUCCESS = '[Homepage] GET pins success';
export const GET_PINS_ERROR   = '[Homepage] GET pins error';

export class GetPins implements Action {
  readonly type = GET_PINS;

  constructor() { }
}

export class GetPinsSuccess implements Action {
  readonly type = GET_PINS_SUCCESS;

  constructor(public payload: Pin[]) { }
}

export class GetPinsError implements Action {
  readonly type = GET_PINS_ERROR;

  constructor(public payload: { message: string }) { }
}

export type All
  = GetPins
  | GetPinsSuccess
  | GetPinsError;
