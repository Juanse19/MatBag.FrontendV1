import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss1.5Component } from './ss1.5.component';

describe('Ss1.5Component', () => {
  let component: Ss1.5Component;
  let fixture: ComponentFixture<Ss1.5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss1.5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss1.5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
