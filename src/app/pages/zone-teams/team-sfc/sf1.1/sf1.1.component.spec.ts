import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf1.1Component } from './sf1.1.component';

describe('Sf1.1Component', () => {
  let component: Sf1.1Component;
  let fixture: ComponentFixture<Sf1.1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf1.1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf1.1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
