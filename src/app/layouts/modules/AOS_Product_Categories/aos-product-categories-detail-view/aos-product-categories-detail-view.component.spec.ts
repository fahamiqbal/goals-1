import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSProductCategoriesDetailViewComponent } from './aos-product-categories-detail-view.component';

describe('AOSProductCategoriesDetailViewComponent', () => {
  let component: AOSProductCategoriesDetailViewComponent;
  let fixture: ComponentFixture<AOSProductCategoriesDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSProductCategoriesDetailViewComponent]
    });
    fixture = TestBed.createComponent(AOSProductCategoriesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
