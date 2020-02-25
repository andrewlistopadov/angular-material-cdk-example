import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDragAndDropComponent } from './app-drag-and-drop.component';

describe('DragAndDropComponent', () => {
  let component: AppDragAndDropComponent;
  let fixture: ComponentFixture<AppDragAndDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppDragAndDropComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
