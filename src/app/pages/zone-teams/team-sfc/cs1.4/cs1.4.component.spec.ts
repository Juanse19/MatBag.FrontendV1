import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cs1.4Component } from './cs1.4.component';

describe('Cs1.4Component', () => {
  let component: Cs1.4Component;
  let fixture: ComponentFixture<Cs1.4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs1.4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs1.4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
