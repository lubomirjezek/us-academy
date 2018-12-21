import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Pin } from '../../../models/pin';
import { All, GET_PINS, GET_PINS_ERROR, GET_PINS_SUCCESS } from '../actions/homepage.actions';
import { StoreData } from '../../../models/store-data';

export interface State {
  pins: StoreData<Pin[]>;
}

export const initialState: State = {
  pins: {
    loaded: false,
    loading: false,
    data: []
  }
};

export const featureName = 'homepage';

export function reducer(state = initialState, action: All) {
  switch (action.type) {
    case GET_PINS:
      return {
        ...state,
        pins: {
          ...state.pins,
          loaded: false,
          loading: true
        }
      };
    case GET_PINS_SUCCESS:
      return {
        ...state,
        pins: {
          loaded: true,
          loading: false,
          data: action.payload
        }
      };
    case GET_PINS_ERROR:
      return {
        ...state,
        pins: {
          loaded: true,
          loading: false,
          data: []
        }
      };
    default: {
      return state;
    }
  }
}

export const featureSelector = createFeatureSelector<State>(featureName);

export const selectPins = createSelector(featureSelector, state => state.pins.data);
