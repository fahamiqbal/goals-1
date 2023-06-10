import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsListViewComponent } from './documents-list-view.component';

describe('DocumentsListViewComponent', () => {
  let component: DocumentsListViewComponent;
  let fixture: ComponentFixture<DocumentsListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsListViewComponent]
    });
    fixture = TestBed.createComponent(DocumentsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
