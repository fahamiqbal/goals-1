import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectListsListViewComponent } from './prospect-lists-list-view.component';

describe('ProspectListsListViewComponent', () => {
  let component: ProspectListsListViewComponent;
  let fixture: ComponentFixture<ProspectListsListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProspectListsListViewComponent]
    });
    fixture = TestBed.createComponent(ProspectListsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
