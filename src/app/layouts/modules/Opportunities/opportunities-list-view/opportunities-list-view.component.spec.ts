import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesListViewComponent } from './opportunities-list-view.component';

describe('OpportunitiesListViewComponent', () => {
  let component: OpportunitiesListViewComponent;
  let fixture: ComponentFixture<OpportunitiesListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpportunitiesListViewComponent]
    });
    fixture = TestBed.createComponent(OpportunitiesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
