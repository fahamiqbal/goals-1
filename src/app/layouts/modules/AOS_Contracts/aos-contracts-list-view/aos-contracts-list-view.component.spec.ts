import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSContractsListViewComponent } from './aos-contracts-list-view.component';

describe('AOSContractsListViewComponent', () => {
  let component: AOSContractsListViewComponent;
  let fixture: ComponentFixture<AOSContractsListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSContractsListViewComponent]
    });
    fixture = TestBed.createComponent(AOSContractsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
