import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cs3.3Component } from './cs3.3.component';

describe('Cs3.3Component', () => {
  let component: Cs3.3Component;
  let fixture: ComponentFixture<Cs3.3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs3.3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs3.3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
