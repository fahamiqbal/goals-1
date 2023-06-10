import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsListViewComponent } from './contacts-list-view.component';

describe('ContactsListViewComponent', () => {
  let component: ContactsListViewComponent;
  let fixture: ComponentFixture<ContactsListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsListViewComponent]
    });
    fixture = TestBed.createComponent(ContactsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
