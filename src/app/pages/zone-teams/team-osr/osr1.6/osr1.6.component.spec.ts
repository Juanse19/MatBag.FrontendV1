import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Osr1.6Component } from './osr1.6.component';

describe('Osr1.6Component', () => {
  let component: Osr1.6Component;
  let fixture: ComponentFixture<Osr1.6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Osr1.6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Osr1.6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
