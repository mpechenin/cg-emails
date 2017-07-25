import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposeRoutingModule } from './compose-routing.module';
import { ComposePageComponent } from './pages/compose/compose.component';

@NgModule({
  imports: [
    CommonModule,
    ComposeRoutingModule
  ],
  declarations: [ComposePageComponent]
})
export class ComposeModule { }
