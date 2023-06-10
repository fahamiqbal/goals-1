import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSProductsListViewComponent } from './aos-products-list-view.component';

describe('AOSProductsListViewComponent', () => {
  let component: AOSProductsListViewComponent;
  let fixture: ComponentFixture<AOSProductsListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSProductsListViewComponent]
    });
    fixture = TestBed.createComponent(AOSProductsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
