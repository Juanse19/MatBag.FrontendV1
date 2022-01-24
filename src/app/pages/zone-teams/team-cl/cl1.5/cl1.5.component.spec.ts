import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl1.5Component } from './cl1.5.component';

describe('Cl1.5Component', () => {
  let component: Cl1.5Component;
  let fixture: ComponentFixture<Cl1.5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1.5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl1.5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
