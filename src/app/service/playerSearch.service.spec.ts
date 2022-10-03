/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlayerSearchService } from './playerSearch.service';

describe('Service: PlayerSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerSearchService]
    });
  });

  it('should ...', inject([PlayerSearchService], (service: PlayerSearchService) => {
    expect(service).toBeTruthy();
  }));
});
