import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss1.2Component } from './ss1.2.component';

describe('Ss1.2Component', () => {
  let component: Ss1.2Component;
  let fixture: ComponentFixture<Ss1.2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss1.2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss1.2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
