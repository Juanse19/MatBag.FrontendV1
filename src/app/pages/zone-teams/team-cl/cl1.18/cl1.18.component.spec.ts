import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.18Component } from './cl1.18.component';

describe('Cl1.18Component', () => {
  let component: Cl1.18Component;
  let fixture: ComponentFixture<Cl1.18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
