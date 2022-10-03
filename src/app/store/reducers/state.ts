import { StateUserSearch } from './player-search.reducer';
import { StateChampions } from './champions.reducer';

export interface AppState {
  champions: StateChampions,
  playerSearch: StateUserSearch
};
