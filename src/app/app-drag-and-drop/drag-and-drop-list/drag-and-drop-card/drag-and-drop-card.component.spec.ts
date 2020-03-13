import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropCardComponent } from './drag-and-drop-card.component';

describe('DragAndDropCardComponent', () => {
  let component: DragAndDropCardComponent;
  let fixture: ComponentFixture<DragAndDropCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DragAndDropCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
