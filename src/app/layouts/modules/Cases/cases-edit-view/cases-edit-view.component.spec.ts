import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesEditViewComponent } from './cases-edit-view.component';

describe('CasesEditViewComponent', () => {
  let component: CasesEditViewComponent;
  let fixture: ComponentFixture<CasesEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesEditViewComponent]
    });
    fixture = TestBed.createComponent(CasesEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
