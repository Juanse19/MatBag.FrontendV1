import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.8Component } from './cl1.8.component';

describe('Cl1.8Component', () => {
  let component: Cl1.8Component;
  let fixture: ComponentFixture<Cl1.8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
