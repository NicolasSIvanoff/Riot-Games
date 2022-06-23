import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ChampionsEffects } from './champions.effects';

describe('ChampionsEffects', () => {
  let actions$: Observable<any>;
  let effects: ChampionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChampionsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ChampionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
