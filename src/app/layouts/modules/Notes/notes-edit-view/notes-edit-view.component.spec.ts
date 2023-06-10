import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesEditViewComponent } from './notes-edit-view.component';

describe('NotesEditViewComponent', () => {
  let component: NotesEditViewComponent;
  let fixture: ComponentFixture<NotesEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesEditViewComponent]
    });
    fixture = TestBed.createComponent(NotesEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
