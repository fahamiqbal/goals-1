import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOKKnowledgeBaseCategoriesDetailViewComponent } from './aok-knowledge-base-categories-detail-view.component';

describe('AOKKnowledgeBaseCategoriesDetailViewComponent', () => {
  let component: AOKKnowledgeBaseCategoriesDetailViewComponent;
  let fixture: ComponentFixture<AOKKnowledgeBaseCategoriesDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOKKnowledgeBaseCategoriesDetailViewComponent]
    });
    fixture = TestBed.createComponent(AOKKnowledgeBaseCategoriesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
