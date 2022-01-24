import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss1.3Component } from './ss1.3.component';

describe('Ss1.3Component', () => {
  let component: Ss1.3Component;
  let fixture: ComponentFixture<Ss1.3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss1.3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss1.3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
