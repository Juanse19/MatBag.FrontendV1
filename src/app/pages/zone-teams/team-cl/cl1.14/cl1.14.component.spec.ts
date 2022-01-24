import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.14Component } from './cl1.14.component';

describe('Cl1.14Component', () => {
  let component: Cl1.14Component;
  let fixture: ComponentFixture<Cl1.14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
