import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesDetailViewComponent } from './cases-detail-view.component';

describe('CasesDetailViewComponent', () => {
  let component: CasesDetailViewComponent;
  let fixture: ComponentFixture<CasesDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesDetailViewComponent]
    });
    fixture = TestBed.createComponent(CasesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
