import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf3.4Component } from './sf3.4.component';

describe('Sf3.4Component', () => {
  let component: Sf3.4Component;
  let fixture: ComponentFixture<Sf3.4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf3.4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf3.4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
