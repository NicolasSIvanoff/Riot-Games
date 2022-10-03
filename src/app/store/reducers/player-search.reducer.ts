import { UserModel } from './../../service/models/shearchUser.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as PlayerSearchActions from '../actions/player-search.actions';

export const playerSearchFeatureKey = 'playerSearch';

export interface StateUserSearch {
  historicUser: Array<any>;
  error: string;
}

export const initialState: StateUserSearch = {
  historicUser: [],
  error: ''
};

export const reducer = createReducer(
  initialState,
  on(PlayerSearchActions.yHistoricSuccess, (state, action): StateUserSearch => {
    console.log('aaaaaaaaaaaaa', action.historicUser);
    return {
      ...state,
      historicUser: action.historicUser,
      error: ''
    };
  }),
  on(PlayerSearchActions.yPlayerSearchsFailure, (state, action): StateUserSearch => {
    return {
      ...state,
      historicUser: [],
      error: action.error,
    }
  }),
);
