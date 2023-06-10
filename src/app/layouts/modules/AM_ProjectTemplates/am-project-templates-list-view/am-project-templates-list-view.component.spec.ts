import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMProjectTemplatesListViewComponent } from './am-project-templates-list-view.component';

describe('AMProjectTemplatesListViewComponent', () => {
  let component: AMProjectTemplatesListViewComponent;
  let fixture: ComponentFixture<AMProjectTemplatesListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AMProjectTemplatesListViewComponent]
    });
    fixture = TestBed.createComponent(AMProjectTemplatesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
