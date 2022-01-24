import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf1.7Component } from './sf1.7.component';

describe('Sf1.7Component', () => {
  let component: Sf1.7Component;
  let fixture: ComponentFixture<Sf1.7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf1.7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf1.7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
