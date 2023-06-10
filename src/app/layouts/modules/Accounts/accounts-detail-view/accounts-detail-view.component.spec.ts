import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsDetailViewComponent } from './accounts-detail-view.component';

describe('AccountsDetailViewComponent', () => {
  let component: AccountsDetailViewComponent;
  let fixture: ComponentFixture<AccountsDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountsDetailViewComponent]
    });
    fixture = TestBed.createComponent(AccountsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
