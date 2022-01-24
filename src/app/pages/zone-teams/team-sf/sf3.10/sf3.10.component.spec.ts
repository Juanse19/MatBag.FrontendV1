import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf3.10Component } from './sf3.10.component';

describe('Sf3.10Component', () => {
  let component: Sf3.10Component;
  let fixture: ComponentFixture<Sf3.10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf3.10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf3.10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
