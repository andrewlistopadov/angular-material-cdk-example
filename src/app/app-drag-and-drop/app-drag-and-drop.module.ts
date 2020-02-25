import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppDragAndDropComponent } from './app-drag-and-drop.component';

@NgModule({
  declarations: [AppDragAndDropComponent],
  imports: [
    CommonModule,
    DragDropModule,
    RouterModule.forChild([{ path: '', component: AppDragAndDropComponent }])
  ]
})
export class AppDragAndDropModule {}
