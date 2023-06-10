import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOKKnowledgeBaseCategoriesEditViewComponent } from './aok-knowledge-base-categories-edit-view.component';

describe('AOKKnowledgeBaseCategoriesEditViewComponent', () => {
  let component: AOKKnowledgeBaseCategoriesEditViewComponent;
  let fixture: ComponentFixture<AOKKnowledgeBaseCategoriesEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOKKnowledgeBaseCategoriesEditViewComponent]
    });
    fixture = TestBed.createComponent(AOKKnowledgeBaseCategoriesEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
