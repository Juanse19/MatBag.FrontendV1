import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cs3.6Component } from './cs3.6.component';

describe('Cs3.6Component', () => {
  let component: Cs3.6Component;
  let fixture: ComponentFixture<Cs3.6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs3.6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs3.6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
