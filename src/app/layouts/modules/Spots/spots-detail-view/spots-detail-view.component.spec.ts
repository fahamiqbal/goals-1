import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotsDetailViewComponent } from './spots-detail-view.component';

describe('SpotsDetailViewComponent', () => {
  let component: SpotsDetailViewComponent;
  let fixture: ComponentFixture<SpotsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpotsDetailViewComponent]
    });
    fixture = TestBed.createComponent(SpotsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
