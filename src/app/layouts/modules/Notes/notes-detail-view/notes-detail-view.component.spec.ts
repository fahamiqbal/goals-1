import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDetailViewComponent } from './notes-detail-view.component';

describe('NotesDetailViewComponent', () => {
  let component: NotesDetailViewComponent;
  let fixture: ComponentFixture<NotesDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesDetailViewComponent]
    });
    fixture = TestBed.createComponent(NotesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
