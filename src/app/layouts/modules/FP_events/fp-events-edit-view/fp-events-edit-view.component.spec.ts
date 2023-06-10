import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPEventsEditViewComponent } from './fp-events-edit-view.component';

describe('FPEventsEditViewComponent', () => {
  let component: FPEventsEditViewComponent;
  let fixture: ComponentFixture<FPEventsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FPEventsEditViewComponent]
    });
    fixture = TestBed.createComponent(FPEventsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
