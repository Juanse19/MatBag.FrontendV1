import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.13Component } from './cl1.13.component';

describe('Cl1.13Component', () => {
  let component: Cl1.13Component;
  let fixture: ComponentFixture<Cl1.13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});