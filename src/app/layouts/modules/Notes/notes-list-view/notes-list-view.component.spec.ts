import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesListViewComponent } from './notes-list-view.component';

describe('NotesListViewComponent', () => {
  let component: NotesListViewComponent;
  let fixture: ComponentFixture<NotesListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesListViewComponent]
    });
    fixture = TestBed.createComponent(NotesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
