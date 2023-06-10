import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksDetailViewComponent } from './tasks-detail-view.component';

describe('TasksDetailViewComponent', () => {
  let component: TasksDetailViewComponent;
  let fixture: ComponentFixture<TasksDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksDetailViewComponent]
    });
    fixture = TestBed.createComponent(TasksDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
