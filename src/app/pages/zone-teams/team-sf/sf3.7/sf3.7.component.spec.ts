import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf3.7Component } from './sf3.7.component';

describe('Sf3.7Component', () => {
  let component: Sf3.7Component;
  let fixture: ComponentFixture<Sf3.7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf3.7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf3.7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
