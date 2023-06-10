import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSInvoicesListViewComponent } from './aos-invoices-list-view.component';

describe('AOSInvoicesListViewComponent', () => {
  let component: AOSInvoicesListViewComponent;
  let fixture: ComponentFixture<AOSInvoicesListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSInvoicesListViewComponent]
    });
    fixture = TestBed.createComponent(AOSInvoicesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
