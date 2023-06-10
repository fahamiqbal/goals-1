import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectsEditViewComponent } from './prospects-edit-view.component';

describe('ProspectsEditViewComponent', () => {
  let component: ProspectsEditViewComponent;
  let fixture: ComponentFixture<ProspectsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProspectsEditViewComponent]
    });
    fixture = TestBed.createComponent(ProspectsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
