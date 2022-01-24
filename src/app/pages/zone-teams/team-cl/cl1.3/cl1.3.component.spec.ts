import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.3Component } from './cl1.3.component';

describe('Cl1.3Component', () => {
  let component: Cl1.3Component;
  let fixture: ComponentFixture<Cl1.3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
