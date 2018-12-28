import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P0001Component } from './p0001.component';

describe('P0001Component', () => {
  let component: P0001Component;
  let fixture: ComponentFixture<P0001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P0001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P0001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
