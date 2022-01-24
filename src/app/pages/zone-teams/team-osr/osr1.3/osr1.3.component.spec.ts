import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Osr1.3Component } from './osr1.3.component';

describe('Osr1.3Component', () => {
  let component: Osr1.3Component;
  let fixture: ComponentFixture<Osr1.3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Osr1.3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Osr1.3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
