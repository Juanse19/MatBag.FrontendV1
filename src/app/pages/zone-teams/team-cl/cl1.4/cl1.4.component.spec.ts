import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.4Component } from './cl1.4.component';

describe('Cl1.4Component', () => {
  let component: Cl1.4Component;
  let fixture: ComponentFixture<Cl1.4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
