import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.17Component } from './cl1.17.component';

describe('Cl1.17Component', () => {
  let component: Cl1.17Component;
  let fixture: ComponentFixture<Cl1.17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
