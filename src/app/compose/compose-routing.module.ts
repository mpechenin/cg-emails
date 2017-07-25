import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComposePageComponent } from './pages/compose/compose.component';

const routes: Routes = [
  {
    path: ':to',
    component: ComposePageComponent,
    outlet: 'compose'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComposeRoutingModule { }
