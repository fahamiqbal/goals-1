import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysEditViewComponent } from './surveys-edit-view.component';

describe('SurveysEditViewComponent', () => {
  let component: SurveysEditViewComponent;
  let fixture: ComponentFixture<SurveysEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveysEditViewComponent]
    });
    fixture = TestBed.createComponent(SurveysEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
