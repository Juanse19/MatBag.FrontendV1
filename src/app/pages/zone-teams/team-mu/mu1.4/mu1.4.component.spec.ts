import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mu1.4Component } from './mu1.4.component';

describe('Mu1.4Component', () => {
  let component: Mu1.4Component;
  let fixture: ComponentFixture<Mu1.4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mu1.4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mu1.4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
