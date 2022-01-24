import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cs1.7Component } from './cs1.7.component';

describe('Cs1.7Component', () => {
  let component: Cs1.7Component;
  let fixture: ComponentFixture<Cs1.7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs1.7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs1.7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
