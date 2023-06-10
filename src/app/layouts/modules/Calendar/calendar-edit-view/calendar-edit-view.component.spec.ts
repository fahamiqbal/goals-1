import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEditViewComponent } from './calendar-edit-view.component';

describe('CalendarEditViewComponent', () => {
  let component: CalendarEditViewComponent;
  let fixture: ComponentFixture<CalendarEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarEditViewComponent]
    });
    fixture = TestBed.createComponent(CalendarEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
