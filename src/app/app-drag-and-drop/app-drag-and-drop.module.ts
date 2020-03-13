import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppDragAndDropComponent } from './app-drag-and-drop.component';
import { DragAndDropListModule } from './drag-and-drop-list/drag-and-drop-list.module';

@NgModule({
  declarations: [AppDragAndDropComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AppDragAndDropComponent }]),
    DragAndDropListModule
  ]
})
export class AppDragAndDropModule {}
