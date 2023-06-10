import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsDetailViewComponent } from './emails-detail-view.component';

describe('EmailsDetailViewComponent', () => {
  let component: EmailsDetailViewComponent;
  let fixture: ComponentFixture<EmailsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailsDetailViewComponent]
    });
    fixture = TestBed.createComponent(EmailsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
