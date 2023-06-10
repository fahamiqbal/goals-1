import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksEditViewComponent } from './tasks-edit-view.component';

describe('TasksEditViewComponent', () => {
  let component: TasksEditViewComponent;
  let fixture: ComponentFixture<TasksEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksEditViewComponent]
    });
    fixture = TestBed.createComponent(TasksEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
