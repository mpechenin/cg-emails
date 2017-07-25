import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposeRoutingModule } from './compose-routing.module';
import { ComposePageComponent } from './pages/compose/compose.component';
import { ComposeService } from './services/compose.service';

@NgModule({
  imports: [
    CommonModule,
    ComposeRoutingModule
  ],
  declarations: [ComposePageComponent],
  providers: [ComposeService]
})
export class ComposeModule { }
