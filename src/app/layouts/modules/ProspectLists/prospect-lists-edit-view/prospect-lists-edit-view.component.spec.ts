import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectListsEditViewComponent } from './prospect-lists-edit-view.component';

describe('ProspectListsEditViewComponent', () => {
  let component: ProspectListsEditViewComponent;
  let fixture: ComponentFixture<ProspectListsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProspectListsEditViewComponent]
    });
    fixture = TestBed.createComponent(ProspectListsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
