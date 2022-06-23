import { ActionReducerMap } from '@ngrx/store';
import * as fromChampions from '../reducers/champions.reducer';


export const reducers: ActionReducerMap<any> = {
  [fromChampions.championsFeatureKey]: fromChampions.reducer
};
