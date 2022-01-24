import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf3.1Component } from './sf3.1.component';

describe('Sf3.1Component', () => {
  let component: Sf3.1Component;
  let fixture: ComponentFixture<Sf3.1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf3.1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf3.1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
