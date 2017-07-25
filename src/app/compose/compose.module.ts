import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComposeRoutingModule } from './compose-routing.module';
import { ComposePageComponent } from './pages/compose/compose.component';
import { ComposeService } from './services/compose.service';
import { ComposeComponent } from './components/compose/compose.component';

@NgModule({
  imports: [
    CommonModule,
    ComposeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ComposePageComponent, ComposeComponent],
  providers: [ComposeService]
})
export class ComposeModule { }
