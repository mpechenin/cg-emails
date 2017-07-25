import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoldersRoutingModule } from './folders-routing.module';
import { FolderPageComponent } from './pages/folder/folder.component';
import { PageComponent } from './components/page/page.component';

@NgModule({
  imports: [
    CommonModule,
    FoldersRoutingModule
  ],
  declarations: [FolderPageComponent, PageComponent]
})
export class FoldersModule { }
