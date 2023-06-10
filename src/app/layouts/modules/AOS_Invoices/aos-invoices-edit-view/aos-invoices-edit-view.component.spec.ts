import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSInvoicesEditViewComponent } from './aos-invoices-edit-view.component';

describe('AOSInvoicesEditViewComponent', () => {
  let component: AOSInvoicesEditViewComponent;
  let fixture: ComponentFixture<AOSInvoicesEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSInvoicesEditViewComponent]
    });
    fixture = TestBed.createComponent(AOSInvoicesEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
