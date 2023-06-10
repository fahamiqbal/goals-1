import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSProductsEditViewComponent } from './aos-products-edit-view.component';

describe('AOSProductsEditViewComponent', () => {
  let component: AOSProductsEditViewComponent;
  let fixture: ComponentFixture<AOSProductsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSProductsEditViewComponent]
    });
    fixture = TestBed.createComponent(AOSProductsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
