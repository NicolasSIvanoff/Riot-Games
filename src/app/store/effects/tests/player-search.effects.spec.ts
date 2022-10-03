import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PlayerSearchEffects } from '../player-search.effects';

describe('PlayerSearchEffects', () => {
  let actions$: Observable<any>;
  let effects: PlayerSearchEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlayerSearchEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PlayerSearchEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
