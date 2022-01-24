import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cs1.5Component } from './cs1.5.component';

describe('Cs1.5Component', () => {
  let component: Cs1.5Component;
  let fixture: ComponentFixture<Cs1.5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs1.5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs1.5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
