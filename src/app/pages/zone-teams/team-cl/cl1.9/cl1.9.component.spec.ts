import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.9Component } from './cl1.9.component';

describe('Cl1.9Component', () => {
  let component: Cl1.9Component;
  let fixture: ComponentFixture<Cl1.9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
