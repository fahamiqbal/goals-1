import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailViewComponent } from './project-detail-view.component';

describe('ProjectDetailViewComponent', () => {
  let component: ProjectDetailViewComponent;
  let fixture: ComponentFixture<ProjectDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetailViewComponent]
    });
    fixture = TestBed.createComponent(ProjectDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
