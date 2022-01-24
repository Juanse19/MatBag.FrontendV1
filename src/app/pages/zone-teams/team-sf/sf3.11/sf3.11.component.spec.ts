import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf3.11Component } from './sf3.11.component';

describe('Sf3.11Component', () => {
  let component: Sf3.11Component;
  let fixture: ComponentFixture<Sf3.11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf3.11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf3.11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
