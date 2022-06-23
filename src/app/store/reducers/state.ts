import { ChampionsModel } from './../../service/models/champions.model';
import { StateChampions } from './champions.reducer';

export interface AppState {
  champions: StateChampions
};
