import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSQuotesDetailViewComponent } from './aos-quotes-detail-view.component';

describe('AOSQuotesDetailViewComponent', () => {
  let component: AOSQuotesDetailViewComponent;
  let fixture: ComponentFixture<AOSQuotesDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSQuotesDetailViewComponent]
    });
    fixture = TestBed.createComponent(AOSQuotesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
