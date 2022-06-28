import { ChampionsModel } from './../../service/models/champions.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as ChampionsActions from '../actions/champions.actions';

export const championsFeatureKey = 'champions';

export interface StateChampions {
  champions: ChampionsModel | null;
  error: string;
  load: boolean;
}

export const initialState: StateChampions = {
  champions: null,
  error: '',
  load: false
};

export const reducer = createReducer(
  initialState,

  on(ChampionsActions.loadChampions, state => state),
  on(ChampionsActions.loadChampionsSuccess, (state, action): StateChampions => {
    return {
      ...state,
      champions: action.data,
      error: ''
    }
  }),
  on(ChampionsActions.loadChampionssFailure, (state, action): StateChampions => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(
    ChampionsActions.loadStatus,
    (state, action): StateChampions => {
      return { ...state, load: action.load };
    }
  )

);
