import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlayerSearch from '../reducers/player-search.reducer';

export const selectPlayerSearchState = createFeatureSelector<fromPlayerSearch.StateUserSearch>(
  fromPlayerSearch.playerSearchFeatureKey
);

export const selectPlayerSearchSuccess = createSelector(
  selectPlayerSearchState,
  state => state.historicUser,
)

export const selectPlayerSearchError = createSelector(
  selectPlayerSearchState,
  state => state.error,
)
