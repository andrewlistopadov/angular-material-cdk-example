import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'app/drag-and-drop', pathMatch: 'full' },
  {
    path: 'app/drag-and-drop',
    loadChildren: () =>
      import('./app-drag-and-drop/app-drag-and-drop.module').then(
        m => m.AppDragAndDropModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
