import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsListViewComponent } from './campaigns-list-view.component';

describe('CampaignsListViewComponent', () => {
  let component: CampaignsListViewComponent;
  let fixture: ComponentFixture<CampaignsListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignsListViewComponent]
    });
    fixture = TestBed.createComponent(CampaignsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
