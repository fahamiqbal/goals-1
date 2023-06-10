import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOKKnowledgeBaseListViewComponent } from './aok-knowledge-base-list-view.component';

describe('AOKKnowledgeBaseListViewComponent', () => {
  let component: AOKKnowledgeBaseListViewComponent;
  let fixture: ComponentFixture<AOKKnowledgeBaseListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOKKnowledgeBaseListViewComponent]
    });
    fixture = TestBed.createComponent(AOKKnowledgeBaseListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
