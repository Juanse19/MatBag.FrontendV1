import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cs1.6Component } from './cs1.6.component';

describe('Cs1.6Component', () => {
  let component: Cs1.6Component;
  let fixture: ComponentFixture<Cs1.6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs1.6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs1.6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
