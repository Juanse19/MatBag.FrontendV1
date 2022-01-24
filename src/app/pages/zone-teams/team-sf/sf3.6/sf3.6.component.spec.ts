import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf3.6Component } from './sf3.6.component';

describe('Sf3.6Component', () => {
  let component: Sf3.6Component;
  let fixture: ComponentFixture<Sf3.6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf3.6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf3.6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
