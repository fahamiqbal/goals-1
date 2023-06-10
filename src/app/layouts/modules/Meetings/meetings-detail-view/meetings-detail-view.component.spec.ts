import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsDetailViewComponent } from './meetings-detail-view.component';

describe('MeetingsDetailViewComponent', () => {
  let component: MeetingsDetailViewComponent;
  let fixture: ComponentFixture<MeetingsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingsDetailViewComponent]
    });
    fixture = TestBed.createComponent(MeetingsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
