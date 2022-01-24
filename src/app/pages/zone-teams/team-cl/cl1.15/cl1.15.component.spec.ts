import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.15Component } from './cl1.15.component';

describe('Cl1.15Component', () => {
  let component: Cl1.15Component;
  let fixture: ComponentFixture<Cl1.15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
