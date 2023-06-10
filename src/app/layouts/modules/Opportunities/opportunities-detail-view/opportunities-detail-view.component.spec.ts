import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesDetailViewComponent } from './opportunities-detail-view.component';

describe('OpportunitiesDetailViewComponent', () => {
  let component: OpportunitiesDetailViewComponent;
  let fixture: ComponentFixture<OpportunitiesDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpportunitiesDetailViewComponent]
    });
    fixture = TestBed.createComponent(OpportunitiesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
