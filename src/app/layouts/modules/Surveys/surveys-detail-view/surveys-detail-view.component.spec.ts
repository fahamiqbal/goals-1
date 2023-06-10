import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysDetailViewComponent } from './surveys-detail-view.component';

describe('SurveysDetailViewComponent', () => {
  let component: SurveysDetailViewComponent;
  let fixture: ComponentFixture<SurveysDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveysDetailViewComponent]
    });
    fixture = TestBed.createComponent(SurveysDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
