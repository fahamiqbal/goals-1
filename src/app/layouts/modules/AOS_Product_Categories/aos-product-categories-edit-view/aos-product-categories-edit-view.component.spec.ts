import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSProductCategoriesEditViewComponent } from './aos-product-categories-edit-view.component';

describe('AOSProductCategoriesEditViewComponent', () => {
  let component: AOSProductCategoriesEditViewComponent;
  let fixture: ComponentFixture<AOSProductCategoriesEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSProductCategoriesEditViewComponent]
    });
    fixture = TestBed.createComponent(AOSProductCategoriesEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
