import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTemplatesDetailViewComponent } from './email-templates-detail-view.component';

describe('EmailTemplatesDetailViewComponent', () => {
  let component: EmailTemplatesDetailViewComponent;
  let fixture: ComponentFixture<EmailTemplatesDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailTemplatesDetailViewComponent]
    });
    fixture = TestBed.createComponent(EmailTemplatesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
