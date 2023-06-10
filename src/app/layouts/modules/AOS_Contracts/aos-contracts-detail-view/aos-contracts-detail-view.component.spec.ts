import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSContractsDetailViewComponent } from './aos-contracts-detail-view.component';

describe('AOSContractsDetailViewComponent', () => {
  let component: AOSContractsDetailViewComponent;
  let fixture: ComponentFixture<AOSContractsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSContractsDetailViewComponent]
    });
    fixture = TestBed.createComponent(AOSContractsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
