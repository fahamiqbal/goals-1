import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMProjectTemplatesDetailViewComponent } from './am-project-templates-detail-view.component';

describe('AMProjectTemplatesDetailViewComponent', () => {
  let component: AMProjectTemplatesDetailViewComponent;
  let fixture: ComponentFixture<AMProjectTemplatesDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AMProjectTemplatesDetailViewComponent]
    });
    fixture = TestBed.createComponent(AMProjectTemplatesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
