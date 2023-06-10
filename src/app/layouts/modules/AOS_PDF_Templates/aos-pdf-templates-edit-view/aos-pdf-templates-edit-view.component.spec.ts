import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSPDFTemplatesEditViewComponent } from './aos-pdf-templates-edit-view.component';

describe('AOSPDFTemplatesEditViewComponent', () => {
  let component: AOSPDFTemplatesEditViewComponent;
  let fixture: ComponentFixture<AOSPDFTemplatesEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSPDFTemplatesEditViewComponent]
    });
    fixture = TestBed.createComponent(AOSPDFTemplatesEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
