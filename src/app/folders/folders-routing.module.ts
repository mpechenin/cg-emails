import { EmailPageComponent } from './pages/email/email.component';
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
  },
  {
    path: 'folder/:folderType/email/:emailId',
    component: EmailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoldersRoutingModule { }
