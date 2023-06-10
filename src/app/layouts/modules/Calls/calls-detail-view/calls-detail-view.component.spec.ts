import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsDetailViewComponent } from './calls-detail-view.component';

describe('CallsDetailViewComponent', () => {
  let component: CallsDetailViewComponent;
  let fixture: ComponentFixture<CallsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallsDetailViewComponent]
    });
    fixture = TestBed.createComponent(CallsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
