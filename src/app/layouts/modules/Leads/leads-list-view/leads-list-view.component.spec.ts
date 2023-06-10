import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsListViewComponent } from './leads-list-view.component';

describe('LeadsListViewComponent', () => {
  let component: LeadsListViewComponent;
  let fixture: ComponentFixture<LeadsListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsListViewComponent]
    });
    fixture = TestBed.createComponent(LeadsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
