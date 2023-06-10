import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPEventLocationsDetailViewComponent } from './fp-event-locations-detail-view.component';

describe('FPEventLocationsDetailViewComponent', () => {
  let component: FPEventLocationsDetailViewComponent;
  let fixture: ComponentFixture<FPEventLocationsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FPEventLocationsDetailViewComponent]
    });
    fixture = TestBed.createComponent(FPEventLocationsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
