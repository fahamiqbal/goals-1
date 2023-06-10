import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectsListViewComponent } from './prospects-list-view.component';

describe('ProspectsListViewComponent', () => {
  let component: ProspectsListViewComponent;
  let fixture: ComponentFixture<ProspectsListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProspectsListViewComponent]
    });
    fixture = TestBed.createComponent(ProspectsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
