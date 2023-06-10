import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesEditViewComponent } from './opportunities-edit-view.component';

describe('OpportunitiesEditViewComponent', () => {
  let component: OpportunitiesEditViewComponent;
  let fixture: ComponentFixture<OpportunitiesEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpportunitiesEditViewComponent]
    });
    fixture = TestBed.createComponent(OpportunitiesEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
