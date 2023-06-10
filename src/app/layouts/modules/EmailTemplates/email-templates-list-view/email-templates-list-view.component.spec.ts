import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTemplatesListViewComponent } from './email-templates-list-view.component';

describe('EmailTemplatesListViewComponent', () => {
  let component: EmailTemplatesListViewComponent;
  let fixture: ComponentFixture<EmailTemplatesListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailTemplatesListViewComponent]
    });
    fixture = TestBed.createComponent(EmailTemplatesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
