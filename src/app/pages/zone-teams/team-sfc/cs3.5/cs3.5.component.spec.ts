import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cs3.5Component } from './cs3.5.component';

describe('Cs3.5Component', () => {
  let component: Cs3.5Component;
  let fixture: ComponentFixture<Cs3.5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs3.5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs3.5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
