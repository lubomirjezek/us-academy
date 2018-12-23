import { createFeatureSelector, createSelector } from '@ngrx/store';

import { StoreData } from '../../../models/store-data';
import { Link } from '../../../models/link';

export interface State {
  navigation: StoreData<Link[]>;
  socialMedias: StoreData<Link[]>;
}

export const initialState: State = {
  navigation: {
    loaded: true,
    loading: false,
    data: [
      {
        url: 'o-nas',
        name: 'O Nás'
      }, {
        url: 'vyber-mest',
        name: 'Výběr měst'
      }, {
        url: 'kontakt',
        name: 'Kontakt'
      }
    ]
  },
  socialMedias: {
    loaded: true,
    loading: false,
    data: [
      {
        url: 'https://www.facebook.com/Urban-Sense-Academy-1621345168099222/',
        name: 'fb'
      }, {
        url: 'https://www.instagram.com/urbansenseacademy/',
        name: 'ig'
      }
    ]
  }
};

export const featureName = 'header';

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export const featureSelector = createFeatureSelector<State>(featureName);

export const selectNavigation = createSelector(featureSelector, state => state.navigation.data);
export const selectSocialMedias = createSelector(featureSelector, state => state.socialMedias.data);
