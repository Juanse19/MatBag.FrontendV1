import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.12Component } from './cl1.12.component';

describe('Cl1.12Component', () => {
  let component: Cl1.12Component;
  let fixture: ComponentFixture<Cl1.12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
