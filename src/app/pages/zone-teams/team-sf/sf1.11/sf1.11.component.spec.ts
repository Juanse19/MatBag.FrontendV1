import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf1.11Component } from './sf1.11.component';

describe('Sf1.11Component', () => {
  let component: Sf1.11Component;
  let fixture: ComponentFixture<Sf1.11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf1.11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf1.11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
