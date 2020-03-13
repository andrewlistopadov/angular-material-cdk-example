import { TestBed } from '@angular/core/testing';

import { DragAndDropListService } from './drag-and-drop-list.service';

describe('DragAndDropListService', () => {
  let service: DragAndDropListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragAndDropListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
