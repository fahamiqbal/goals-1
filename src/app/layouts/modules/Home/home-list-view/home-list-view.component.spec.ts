import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListViewComponent } from './home-list-view.component';

describe('HomeListViewComponent', () => {
  let component: HomeListViewComponent;
  let fixture: ComponentFixture<HomeListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeListViewComponent]
    });
    fixture = TestBed.createComponent(HomeListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
