import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.11Component } from './cl1.11.component';

describe('Cl1.11Component', () => {
  let component: Cl1.11Component;
  let fixture: ComponentFixture<Cl1.11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
