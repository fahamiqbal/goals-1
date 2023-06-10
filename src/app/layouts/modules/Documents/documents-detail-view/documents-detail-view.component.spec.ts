import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsDetailViewComponent } from './documents-detail-view.component';

describe('DocumentsDetailViewComponent', () => {
  let component: DocumentsDetailViewComponent;
  let fixture: ComponentFixture<DocumentsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsDetailViewComponent]
    });
    fixture = TestBed.createComponent(DocumentsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
