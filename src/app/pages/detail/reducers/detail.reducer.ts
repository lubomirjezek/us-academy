import { createFeatureSelector, createSelector } from '@ngrx/store';

import { StoreData } from '../../../models/store-data';
import { Training } from '../../../models/training';
import { Workshop } from '../../../models/workshop';
import { Camp } from '../../../models/camp';
import { All, GET_DETAIL, GET_DETAIL_ERROR, GET_DETAIL_SUCCESS } from '../actions/detail.actions';

export interface State {
  detail: StoreData<Training | Workshop | Camp>;
}

export const initialState: State = {
  detail: {
    loaded: false,
    loading: false,
    data: null
  }
};

export const featureName = 'homepage';

export function reducer(state = initialState, action: All) {
  switch (action.type) {
    case GET_DETAIL:
      return {
        ...state,
        detail: {
          ...state.detail,
          loaded: false,
          loading: true
        }
      };
    case GET_DETAIL_SUCCESS:
      return {
        ...state,
        detail: {
          loaded: true,
          loading: false,
          data: action.payload
        }
      };
    case GET_DETAIL_ERROR:
      return {
        ...state,
        detail: {
          loaded: true,
          loading: false,
          data: null
        }
      };
    default: {
      return state;
    }
  }
}

export const featureSelector = createFeatureSelector<State>(featureName);

export const selectDetail = createSelector(featureSelector, state => state.detail.data);
