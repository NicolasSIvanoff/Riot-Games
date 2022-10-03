/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HistoricUserComponent } from './historic-user.component';

describe('HistoricUserComponent', () => {
  let component: HistoricUserComponent;
  let fixture: ComponentFixture<HistoricUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricUserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
