import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPEventsDetailViewComponent } from './fp-events-detail-view.component';

describe('FPEventsDetailViewComponent', () => {
  let component: FPEventsDetailViewComponent;
  let fixture: ComponentFixture<FPEventsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FPEventsDetailViewComponent]
    });
    fixture = TestBed.createComponent(FPEventsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
