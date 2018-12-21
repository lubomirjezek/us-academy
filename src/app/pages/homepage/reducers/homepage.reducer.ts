import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Pin } from '../../../models/pin';

export interface State {
  pins: Pin[];
}

export const initialState: State = {
  pins: [
    {
      x: 36,
      y: 62
    }, {
      x: 40,
      y: 71
    }, {
      x: 46,
      y: 63
    }, {
      x: 47,
      y: 71
    }, {
      x: 51,
      y: 61
    }, {
      x: 55,
      y: 70
    }
  ]
};

export const featureName = 'homepage';

export function reducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export const featureSelector = createFeatureSelector<State>(featureName);

export const selectPins = createSelector(featureSelector, state => state.pins);
