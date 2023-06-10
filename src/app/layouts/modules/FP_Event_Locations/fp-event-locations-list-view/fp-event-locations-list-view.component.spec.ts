import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPEventLocationsListViewComponent } from './fp-event-locations-list-view.component';

describe('FPEventLocationsListViewComponent', () => {
  let component: FPEventLocationsListViewComponent;
  let fixture: ComponentFixture<FPEventLocationsListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FPEventLocationsListViewComponent]
    });
    fixture = TestBed.createComponent(FPEventLocationsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
