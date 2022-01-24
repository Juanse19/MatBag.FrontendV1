import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf3.5Component } from './sf3.5.component';

describe('Sf3.5Component', () => {
  let component: Sf3.5Component;
  let fixture: ComponentFixture<Sf3.5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf3.5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf3.5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
