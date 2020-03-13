import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragAndDropListComponent } from './drag-and-drop-list.component';
import { DragAndDropCardComponent } from './drag-and-drop-card/drag-and-drop-card.component';

@NgModule({
  declarations: [DragAndDropListComponent, DragAndDropCardComponent],
  exports: [DragAndDropListComponent],
  imports: [CommonModule, DragDropModule]
})
export class DragAndDropListModule {}
