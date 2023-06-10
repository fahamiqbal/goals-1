import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AORReportsEditViewComponent } from './aor-reports-edit-view.component';

describe('AORReportsEditViewComponent', () => {
  let component: AORReportsEditViewComponent;
  let fixture: ComponentFixture<AORReportsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AORReportsEditViewComponent]
    });
    fixture = TestBed.createComponent(AORReportsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
