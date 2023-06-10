import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectsDetailViewComponent } from './prospects-detail-view.component';

describe('ProspectsDetailViewComponent', () => {
  let component: ProspectsDetailViewComponent;
  let fixture: ComponentFixture<ProspectsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProspectsDetailViewComponent]
    });
    fixture = TestBed.createComponent(ProspectsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
