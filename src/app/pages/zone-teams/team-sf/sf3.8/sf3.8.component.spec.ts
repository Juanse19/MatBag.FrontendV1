import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf3.8Component } from './sf3.8.component';

describe('Sf3.8Component', () => {
  let component: Sf3.8Component;
  let fixture: ComponentFixture<Sf3.8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf3.8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf3.8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
