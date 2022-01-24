import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.1Component } from './cl1.1.component';

describe('Cl1.1Component', () => {
  let component: Cl1.1Component;
  let fixture: ComponentFixture<Cl1.1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
