import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSInvoicesDetailViewComponent } from './aos-invoices-detail-view.component';

describe('AOSInvoicesDetailViewComponent', () => {
  let component: AOSInvoicesDetailViewComponent;
  let fixture: ComponentFixture<AOSInvoicesDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSInvoicesDetailViewComponent]
    });
    fixture = TestBed.createComponent(AOSInvoicesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
