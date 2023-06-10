import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSPDFTemplatesDetailViewComponent } from './aos-pdf-templates-detail-view.component';

describe('AOSPDFTemplatesDetailViewComponent', () => {
  let component: AOSPDFTemplatesDetailViewComponent;
  let fixture: ComponentFixture<AOSPDFTemplatesDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSPDFTemplatesDetailViewComponent]
    });
    fixture = TestBed.createComponent(AOSPDFTemplatesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
