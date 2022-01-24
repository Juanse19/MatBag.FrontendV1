import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf1.4Component } from './sf1.4.component';

describe('Sf1.4Component', () => {
  let component: Sf1.4Component;
  let fixture: ComponentFixture<Sf1.4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf1.4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf1.4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
