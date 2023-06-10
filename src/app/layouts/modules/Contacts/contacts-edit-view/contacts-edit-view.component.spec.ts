import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsEditViewComponent } from './contacts-edit-view.component';

describe('ContactsEditViewComponent', () => {
  let component: ContactsEditViewComponent;
  let fixture: ComponentFixture<ContactsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsEditViewComponent]
    });
    fixture = TestBed.createComponent(ContactsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
