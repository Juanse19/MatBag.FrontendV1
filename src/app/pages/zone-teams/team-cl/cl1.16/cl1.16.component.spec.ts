import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.16Component } from './cl1.16.component';

describe('Cl1.16Component', () => {
  let component: Cl1.16Component;
  let fixture: ComponentFixture<Cl1.16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
