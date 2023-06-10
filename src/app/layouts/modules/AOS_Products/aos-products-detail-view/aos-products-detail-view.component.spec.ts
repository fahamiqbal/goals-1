import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSProductsDetailViewComponent } from './aos-products-detail-view.component';

describe('AOSProductsDetailViewComponent', () => {
  let component: AOSProductsDetailViewComponent;
  let fixture: ComponentFixture<AOSProductsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSProductsDetailViewComponent]
    });
    fixture = TestBed.createComponent(AOSProductsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
