import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.2Component } from './cl1.2.component';

describe('Cl1.2Component', () => {
  let component: Cl1.2Component;
  let fixture: ComponentFixture<Cl1.2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
