import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsEditViewComponent } from './calls-edit-view.component';

describe('CallsEditViewComponent', () => {
  let component: CallsEditViewComponent;
  let fixture: ComponentFixture<CallsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallsEditViewComponent]
    });
    fixture = TestBed.createComponent(CallsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
