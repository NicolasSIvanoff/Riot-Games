import * as fromPlayerSearch from '../reducers/player-search.reducer';
import { selectPlayerSearchState } from './player-search.selectors';

describe('PlayerSearch Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPlayerSearchState({
      [fromPlayerSearch.playerSearchFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
