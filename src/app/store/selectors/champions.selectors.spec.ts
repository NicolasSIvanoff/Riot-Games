import * as fromChampions from '../reducers/champions.reducer';
import { selectChampionsState } from './champions.selectors';

describe('Champions Selectors', () => {
  it('should select the feature state', () => {
    const result = selectChampionsState({
      [fromChampions.championsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
