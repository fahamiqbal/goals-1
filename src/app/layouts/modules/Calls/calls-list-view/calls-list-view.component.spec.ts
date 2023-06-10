import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsListViewComponent } from './calls-list-view.component';

describe('CallsListViewComponent', () => {
  let component: CallsListViewComponent;
  let fixture: ComponentFixture<CallsListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallsListViewComponent]
    });
    fixture = TestBed.createComponent(CallsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
