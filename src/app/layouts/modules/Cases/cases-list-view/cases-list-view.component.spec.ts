import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesListViewComponent } from './cases-list-view.component';

describe('CasesListViewComponent', () => {
  let component: CasesListViewComponent;
  let fixture: ComponentFixture<CasesListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesListViewComponent]
    });
    fixture = TestBed.createComponent(CasesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
