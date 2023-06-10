import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsEditViewComponent } from './campaigns-edit-view.component';

describe('CampaignsEditViewComponent', () => {
  let component: CampaignsEditViewComponent;
  let fixture: ComponentFixture<CampaignsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignsEditViewComponent]
    });
    fixture = TestBed.createComponent(CampaignsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
