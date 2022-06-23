import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromChampions from '../reducers/champions.reducer';

export const selectChampionsState = createFeatureSelector<fromChampions.StateChampions>(
  fromChampions.championsFeatureKey
);

export const selectChampionsSuccess = createSelector(
  selectChampionsState,
  state => state.champions,
);
export const selectChampionsError = createSelector(
  selectChampionsState,
  state => state.error);
