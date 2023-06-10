import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsDetailViewComponent } from './leads-detail-view.component';

describe('LeadsDetailViewComponent', () => {
  let component: LeadsDetailViewComponent;
  let fixture: ComponentFixture<LeadsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsDetailViewComponent]
    });
    fixture = TestBed.createComponent(LeadsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
