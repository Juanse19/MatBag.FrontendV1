import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mu1.1Component } from './mu1.1.component';

describe('Mu1.1Component', () => {
  let component: Mu1.1Component;
  let fixture: ComponentFixture<Mu1.1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mu1.1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mu1.1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
