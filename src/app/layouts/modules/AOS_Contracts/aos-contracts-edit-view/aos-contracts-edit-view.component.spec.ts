import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSContractsEditViewComponent } from './aos-contracts-edit-view.component';

describe('AOSContractsEditViewComponent', () => {
  let component: AOSContractsEditViewComponent;
  let fixture: ComponentFixture<AOSContractsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AOSContractsEditViewComponent]
    });
    fixture = TestBed.createComponent(AOSContractsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
