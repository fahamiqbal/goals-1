import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsListViewComponent } from './emails-list-view.component';

describe('EmailsListViewComponent', () => {
  let component: EmailsListViewComponent;
  let fixture: ComponentFixture<EmailsListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailsListViewComponent]
    });
    fixture = TestBed.createComponent(EmailsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
