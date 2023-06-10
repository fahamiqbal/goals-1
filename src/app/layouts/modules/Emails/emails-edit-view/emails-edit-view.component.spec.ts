import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsEditViewComponent } from './emails-edit-view.component';

describe('EmailsEditViewComponent', () => {
  let component: EmailsEditViewComponent;
  let fixture: ComponentFixture<EmailsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailsEditViewComponent]
    });
    fixture = TestBed.createComponent(EmailsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
