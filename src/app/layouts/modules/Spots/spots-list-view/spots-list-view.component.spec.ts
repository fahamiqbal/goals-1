import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotsListViewComponent } from './spots-list-view.component';

describe('SpotsListViewComponent', () => {
  let component: SpotsListViewComponent;
  let fixture: ComponentFixture<SpotsListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpotsListViewComponent]
    });
    fixture = TestBed.createComponent(SpotsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
