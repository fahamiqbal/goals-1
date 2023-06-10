import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPEventLocationsEditViewComponent } from './fp-event-locations-edit-view.component';

describe('FPEventLocationsEditViewComponent', () => {
  let component: FPEventLocationsEditViewComponent;
  let fixture: ComponentFixture<FPEventLocationsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FPEventLocationsEditViewComponent]
    });
    fixture = TestBed.createComponent(FPEventLocationsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
