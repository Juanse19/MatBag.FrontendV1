import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Osr1.4Component } from './osr1.4.component';

describe('Osr1.4Component', () => {
  let component: Osr1.4Component;
  let fixture: ComponentFixture<Osr1.4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Osr1.4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Osr1.4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
