import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectListsDetailViewComponent } from './prospect-lists-detail-view.component';

describe('ProspectListsDetailViewComponent', () => {
  let component: ProspectListsDetailViewComponent;
  let fixture: ComponentFixture<ProspectListsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProspectListsDetailViewComponent]
    });
    fixture = TestBed.createComponent(ProspectListsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
