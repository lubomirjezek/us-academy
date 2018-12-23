import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Pin } from '../../../models/pin';
import { All, GET_CITY, GET_CITY_ERROR, GET_CITY_SUCCESS, GET_PINS, GET_PINS_ERROR, GET_PINS_SUCCESS } from '../actions/homepage.actions';
import { StoreData } from '../../../models/store-data';
import { City } from '../../../models/city';

export interface State {
  pins: StoreData<Pin[]>;
  city: StoreData<City>;
}

export const initialState: State = {
  pins: {
    loaded: false,
    loading: false,
    data: []
  },
  city: {
    loaded: false,
    loading: false,
    data: null
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
    case GET_CITY:
      return {
        ...state,
        city: {
          ...state.pins,
          loaded: false,
          loading: true
        }
      };
    case GET_CITY_SUCCESS:
      return {
        ...state,
        city: {
          loaded: true,
          loading: false,
          data: action.payload
        }
      };
    case GET_CITY_ERROR:
      return {
        ...state,
        city: {
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

export const selectCity = createSelector(featureSelector, state => state.city.data);
export const selectCityStoreData = createSelector(featureSelector, state => state.city);
