import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AORReportsListViewComponent } from './aor-reports-list-view.component';

describe('AORReportsListViewComponent', () => {
  let component: AORReportsListViewComponent;
  let fixture: ComponentFixture<AORReportsListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AORReportsListViewComponent]
    });
    fixture = TestBed.createComponent(AORReportsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
