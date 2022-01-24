import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf1.12Component } from './sf1.12.component';

describe('Sf1.12Component', () => {
  let component: Sf1.12Component;
  let fixture: ComponentFixture<Sf1.12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf1.12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf1.12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
