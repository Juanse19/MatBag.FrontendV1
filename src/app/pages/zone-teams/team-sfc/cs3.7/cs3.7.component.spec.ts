import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cs3.7Component } from './cs3.7.component';

describe('Cs3.7Component', () => {
  let component: Cs3.7Component;
  let fixture: ComponentFixture<Cs3.7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs3.7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs3.7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
