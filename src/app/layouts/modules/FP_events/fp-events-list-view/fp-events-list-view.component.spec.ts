import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPEventsListViewComponent } from './fp-events-list-view.component';

describe('FPEventsListViewComponent', () => {
  let component: FPEventsListViewComponent;
  let fixture: ComponentFixture<FPEventsListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FPEventsListViewComponent]
    });
    fixture = TestBed.createComponent(FPEventsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
