import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss1.4Component } from './ss1.4.component';

describe('Ss1.4Component', () => {
  let component: Ss1.4Component;
  let fixture: ComponentFixture<Ss1.4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss1.4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss1.4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
