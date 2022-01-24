import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf3.9Component } from './sf3.9.component';

describe('Sf3.9Component', () => {
  let component: Sf3.9Component;
  let fixture: ComponentFixture<Sf3.9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf3.9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf3.9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
