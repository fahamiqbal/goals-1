import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSQuotesEditViewComponent } from './aos-quotes-edit-view.component';

describe('AOSQuotesEditViewComponent', () => {
  let component: AOSQuotesEditViewComponent;
  let fixture: ComponentFixture<AOSQuotesEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSQuotesEditViewComponent]
    });
    fixture = TestBed.createComponent(AOSQuotesEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
