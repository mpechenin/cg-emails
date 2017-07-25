import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailComponent } from './components/email/email.component';
import { EmailPageComponent } from './pages/email/email.component';
import { EmailsComponent } from './components/emails/emails.component';
import { FolderPageComponent } from './pages/folder/folder.component';
import { FoldersRoutingModule } from './folders-routing.module';
import { FoldersService } from './services/folders.service';
import { PageComponent } from './components/page/page.component';

@NgModule({
  imports: [
    CommonModule,
    FoldersRoutingModule
  ],
  declarations: [FolderPageComponent, PageComponent, EmailsComponent, EmailPageComponent, EmailComponent],
  providers: [FoldersService]
})
export class FoldersModule { }
