import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDetailViewComponent } from './contacts-detail-view.component';

describe('ContactsDetailViewComponent', () => {
  let component: ContactsDetailViewComponent;
  let fixture: ComponentFixture<ContactsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsDetailViewComponent]
    });
    fixture = TestBed.createComponent(ContactsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
