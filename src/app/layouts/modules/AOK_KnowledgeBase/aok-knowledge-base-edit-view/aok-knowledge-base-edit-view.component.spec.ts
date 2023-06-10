import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOKKnowledgeBaseEditViewComponent } from './aok-knowledge-base-edit-view.component';

describe('AOKKnowledgeBaseEditViewComponent', () => {
  let component: AOKKnowledgeBaseEditViewComponent;
  let fixture: ComponentFixture<AOKKnowledgeBaseEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOKKnowledgeBaseEditViewComponent]
    });
    fixture = TestBed.createComponent(AOKKnowledgeBaseEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
