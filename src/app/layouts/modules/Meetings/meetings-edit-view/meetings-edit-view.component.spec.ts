import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsEditViewComponent } from './meetings-edit-view.component';

describe('MeetingsEditViewComponent', () => {
  let component: MeetingsEditViewComponent;
  let fixture: ComponentFixture<MeetingsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingsEditViewComponent]
    });
    fixture = TestBed.createComponent(MeetingsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
