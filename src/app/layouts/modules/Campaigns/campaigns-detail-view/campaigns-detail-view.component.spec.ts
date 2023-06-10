import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsDetailViewComponent } from './campaigns-detail-view.component';

describe('CampaignsDetailViewComponent', () => {
  let component: CampaignsDetailViewComponent;
  let fixture: ComponentFixture<CampaignsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignsDetailViewComponent]
    });
    fixture = TestBed.createComponent(CampaignsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
