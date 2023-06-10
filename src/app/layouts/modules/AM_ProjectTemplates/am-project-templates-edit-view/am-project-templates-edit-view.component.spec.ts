import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMProjectTemplatesEditViewComponent } from './am-project-templates-edit-view.component';

describe('AMProjectTemplatesEditViewComponent', () => {
  let component: AMProjectTemplatesEditViewComponent;
  let fixture: ComponentFixture<AMProjectTemplatesEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AMProjectTemplatesEditViewComponent]
    });
    fixture = TestBed.createComponent(AMProjectTemplatesEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
