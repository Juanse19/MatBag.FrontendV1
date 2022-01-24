import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cs3.4Component } from './cs3.4.component';

describe('Cs3.4Component', () => {
  let component: Cs3.4Component;
  let fixture: ComponentFixture<Cs3.4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs3.4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs3.4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
