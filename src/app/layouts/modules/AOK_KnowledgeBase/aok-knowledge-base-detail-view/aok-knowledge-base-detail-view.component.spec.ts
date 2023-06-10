import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOKKnowledgeBaseDetailViewComponent } from './aok-knowledge-base-detail-view.component';

describe('AOKKnowledgeBaseDetailViewComponent', () => {
  let component: AOKKnowledgeBaseDetailViewComponent;
  let fixture: ComponentFixture<AOKKnowledgeBaseDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOKKnowledgeBaseDetailViewComponent]
    });
    fixture = TestBed.createComponent(AOKKnowledgeBaseDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
