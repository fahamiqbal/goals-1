import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTemplatesEditViewComponent } from './email-templates-edit-view.component';

describe('EmailTemplatesEditViewComponent', () => {
  let component: EmailTemplatesEditViewComponent;
  let fixture: ComponentFixture<EmailTemplatesEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailTemplatesEditViewComponent]
    });
    fixture = TestBed.createComponent(EmailTemplatesEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
