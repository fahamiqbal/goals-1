import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarListViewComponent } from './calendar-list-view.component';

describe('CalendarListViewComponent', () => {
  let component: CalendarListViewComponent;
  let fixture: ComponentFixture<CalendarListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarListViewComponent]
    });
    fixture = TestBed.createComponent(CalendarListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
