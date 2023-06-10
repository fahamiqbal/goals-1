import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AORReportsDetailViewComponent } from './aor-reports-detail-view.component';

describe('AORReportsDetailViewComponent', () => {
  let component: AORReportsDetailViewComponent;
  let fixture: ComponentFixture<AORReportsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AORReportsDetailViewComponent]
    });
    fixture = TestBed.createComponent(AORReportsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
