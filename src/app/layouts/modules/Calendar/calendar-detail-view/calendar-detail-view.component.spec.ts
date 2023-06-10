import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDetailViewComponent } from './calendar-detail-view.component';

describe('CalendarDetailViewComponent', () => {
  let component: CalendarDetailViewComponent;
  let fixture: ComponentFixture<CalendarDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarDetailViewComponent]
    });
    fixture = TestBed.createComponent(CalendarDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
