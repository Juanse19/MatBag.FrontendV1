import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.7Component } from './cl1.7.component';

describe('Cl1.7Component', () => {
  let component: Cl1.7Component;
  let fixture: ComponentFixture<Cl1.7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
