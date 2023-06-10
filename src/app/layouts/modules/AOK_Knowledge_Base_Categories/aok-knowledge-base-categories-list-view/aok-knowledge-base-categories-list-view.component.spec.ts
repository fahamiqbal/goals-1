import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOKKnowledgeBaseCategoriesListViewComponent } from './aok-knowledge-base-categories-list-view.component';

describe('AOKKnowledgeBaseCategoriesListViewComponent', () => {
  let component: AOKKnowledgeBaseCategoriesListViewComponent;
  let fixture: ComponentFixture<AOKKnowledgeBaseCategoriesListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOKKnowledgeBaseCategoriesListViewComponent]
    });
    fixture = TestBed.createComponent(AOKKnowledgeBaseCategoriesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
