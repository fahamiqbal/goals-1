import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsEditViewComponent } from './documents-edit-view.component';

describe('DocumentsEditViewComponent', () => {
  let component: DocumentsEditViewComponent;
  let fixture: ComponentFixture<DocumentsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsEditViewComponent]
    });
    fixture = TestBed.createComponent(DocumentsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
