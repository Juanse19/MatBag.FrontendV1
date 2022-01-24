import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf1.8Component } from './sf1.8.component';

describe('Sf1.8Component', () => {
  let component: Sf1.8Component;
  let fixture: ComponentFixture<Sf1.8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf1.8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf1.8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
