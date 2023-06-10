import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSQuotesListViewComponent } from './aos-quotes-list-view.component';

describe('AOSQuotesListViewComponent', () => {
  let component: AOSQuotesListViewComponent;
  let fixture: ComponentFixture<AOSQuotesListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSQuotesListViewComponent]
    });
    fixture = TestBed.createComponent(AOSQuotesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
