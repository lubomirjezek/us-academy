import { Action } from '@ngrx/store';

import { Training } from '../../../models/training';
import { Workshop } from '../../../models/workshop';
import { Camp } from '../../../models/camp';

export const GET_DETAIL         = '[Detail] GET detail';
export const GET_DETAIL_SUCCESS = '[Detail] GET detail success';
export const GET_DETAIL_ERROR   = '[Detail] GET detail error';

export class GetDetail implements Action {
  readonly type = GET_DETAIL;

  constructor(public payload: { id: string }) { }
}

export class GetDetailSuccess implements Action {
  readonly type = GET_DETAIL_SUCCESS;

  constructor(public payload: Training | Workshop | Camp) { }
}

export class GetDetailError implements Action {
  readonly type = GET_DETAIL_ERROR;

  constructor(public payload: { message: string }) { }
}

export type All
  = GetDetail
  | GetDetailSuccess
  | GetDetailError;
