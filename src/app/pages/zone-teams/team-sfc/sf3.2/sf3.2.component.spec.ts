import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf3.2Component } from './sf3.2.component';

describe('Sf3.2Component', () => {
  let component: Sf3.2Component;
  let fixture: ComponentFixture<Sf3.2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf3.2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf3.2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
