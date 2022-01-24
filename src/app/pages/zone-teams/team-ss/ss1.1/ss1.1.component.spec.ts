import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss1.1Component } from './ss1.1.component';

describe('Ss1.1Component', () => {
  let component: Ss1.1Component;
  let fixture: ComponentFixture<Ss1.1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss1.1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss1.1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
