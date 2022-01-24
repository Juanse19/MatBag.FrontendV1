import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf1.6Component } from './sf1.6.component';

describe('Sf1.6Component', () => {
  let component: Sf1.6Component;
  let fixture: ComponentFixture<Sf1.6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf1.6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf1.6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
