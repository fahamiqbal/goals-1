import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSProductCategoriesListViewComponent } from './aos-product-categories-list-view.component';

describe('AOSProductCategoriesListViewComponent', () => {
  let component: AOSProductCategoriesListViewComponent;
  let fixture: ComponentFixture<AOSProductCategoriesListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSProductCategoriesListViewComponent]
    });
    fixture = TestBed.createComponent(AOSProductCategoriesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
