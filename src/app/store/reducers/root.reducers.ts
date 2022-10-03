import { ActionReducerMap } from '@ngrx/store';
import * as fromChampions from '../reducers/champions.reducer';
import * as fromPlayerSearch from '../reducers/player-search.reducer';


export const reducers: ActionReducerMap<any> = {
  [fromChampions.championsFeatureKey]: fromChampions.reducer,
  [fromPlayerSearch.playerSearchFeatureKey]: fromChampions.reducer,
};
