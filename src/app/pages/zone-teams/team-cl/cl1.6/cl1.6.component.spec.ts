import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.6Component } from './cl1.6.component';

describe('Cl1.6Component', () => {
  let component: Cl1.6Component;
  let fixture: ComponentFixture<Cl1.6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
