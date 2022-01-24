import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Osr1.5Component } from './osr1.5.component';

describe('Osr1.5Component', () => {
  let component: Osr1.5Component;
  let fixture: ComponentFixture<Osr1.5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Osr1.5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Osr1.5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
