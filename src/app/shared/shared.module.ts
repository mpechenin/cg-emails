import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InMemoryDB } from './utils/in-memory-db';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [InMemoryDB],
  declarations: []
})
export class SharedModule { }
