import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerSearchComponent } from './summoner-search.component';

describe('SummonerSearchComponent', () => {
  let component: SummonerSearchComponent;
  let fixture: ComponentFixture<SummonerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummonerSearchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
