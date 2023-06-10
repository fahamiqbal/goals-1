import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotsEditViewComponent } from './spots-edit-view.component';

describe('SpotsEditViewComponent', () => {
  let component: SpotsEditViewComponent;
  let fixture: ComponentFixture<SpotsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpotsEditViewComponent]
    });
    fixture = TestBed.createComponent(SpotsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
