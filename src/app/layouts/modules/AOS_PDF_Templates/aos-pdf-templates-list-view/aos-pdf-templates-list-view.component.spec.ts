import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSPDFTemplatesListViewComponent } from './aos-pdf-templates-list-view.component';

describe('AOSPDFTemplatesListViewComponent', () => {
  let component: AOSPDFTemplatesListViewComponent;
  let fixture: ComponentFixture<AOSPDFTemplatesListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSPDFTemplatesListViewComponent]
    });
    fixture = TestBed.createComponent(AOSPDFTemplatesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
