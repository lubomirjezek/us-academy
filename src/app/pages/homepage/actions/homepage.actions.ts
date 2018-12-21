import { Action } from '@ngrx/store';

import { Pin } from '../../../models/pin';
import { City } from '../../../models/city';

export const GET_PINS         = '[Homepage] GET pins';
export const GET_PINS_SUCCESS = '[Homepage] GET pins success';
export const GET_PINS_ERROR   = '[Homepage] GET pins error';

export const GET_CITY         = '[Homepage] GET city';
export const GET_CITY_SUCCESS = '[Homepage] GET city success';
export const GET_CITY_ERROR   = '[Homepage] GET city error';

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

export class GetCity implements Action {
  readonly type = GET_CITY;

  constructor(public payload: { id: string }) { }
}

export class GetCitySuccess implements Action {
  readonly type = GET_CITY_SUCCESS;

  constructor(public payload: City) { }
}

export class GetCityError implements Action {
  readonly type = GET_CITY_ERROR;

  constructor(public payload: { message: string }) { }
}

export type All
  = GetPins
  | GetPinsSuccess
  | GetPinsError
  | GetCity
  | GetCitySuccess
  | GetCityError;
