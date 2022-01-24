import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss1.6Component } from './ss1.6.component';

describe('Ss1.6Component', () => {
  let component: Ss1.6Component;
  let fixture: ComponentFixture<Ss1.6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss1.6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss1.6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
