import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsEditViewComponent } from './leads-edit-view.component';

describe('LeadsEditViewComponent', () => {
  let component: LeadsEditViewComponent;
  let fixture: ComponentFixture<LeadsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsEditViewComponent]
    });
    fixture = TestBed.createComponent(LeadsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
