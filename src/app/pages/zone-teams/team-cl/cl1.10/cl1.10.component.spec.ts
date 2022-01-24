import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.10Component } from './cl1.10.component';

describe('Cl1.10Component', () => {
  let component: Cl1.10Component;
  let fixture: ComponentFixture<Cl1.10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
