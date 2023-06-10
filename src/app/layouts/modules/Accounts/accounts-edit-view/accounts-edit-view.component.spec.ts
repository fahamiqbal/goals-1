import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsEditViewComponent } from './accounts-edit-view.component';

describe('AccountsEditViewComponent', () => {
  let component: AccountsEditViewComponent;
  let fixture: ComponentFixture<AccountsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountsEditViewComponent]
    });
    fixture = TestBed.createComponent(AccountsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
