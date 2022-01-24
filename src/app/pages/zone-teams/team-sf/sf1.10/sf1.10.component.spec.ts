import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf1.10Component } from './sf1.10.component';

describe('Sf1.10Component', () => {
  let component: Sf1.10Component;
  let fixture: ComponentFixture<Sf1.10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf1.10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf1.10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
