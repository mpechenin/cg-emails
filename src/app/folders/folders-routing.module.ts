import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPageComponent } from './pages/folder/folder.component';

const routes: Routes = [
  {
    path: 'folder',
    redirectTo: 'folder/inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:folderType',
    component: FolderPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoldersRoutingModule { }
