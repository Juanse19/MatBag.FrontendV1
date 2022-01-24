import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf1.9Component } from './sf1.9.component';

describe('Sf1.9Component', () => {
  let component: Sf1.9Component;
  let fixture: ComponentFixture<Sf1.9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf1.9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf1.9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
