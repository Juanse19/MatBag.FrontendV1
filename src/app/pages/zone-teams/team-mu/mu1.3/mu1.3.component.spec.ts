import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mu1.3Component } from './mu1.3.component';

describe('Mu1.3Component', () => {
  let component: Mu1.3Component;
  let fixture: ComponentFixture<Mu1.3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mu1.3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mu1.3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
