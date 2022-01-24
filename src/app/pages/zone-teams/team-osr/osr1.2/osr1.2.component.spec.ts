import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Osr1.2Component } from './osr1.2.component';

describe('Osr1.2Component', () => {
  let component: Osr1.2Component;
  let fixture: ComponentFixture<Osr1.2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Osr1.2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Osr1.2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
