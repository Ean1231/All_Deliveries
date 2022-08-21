import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientOptionsPage } from './client-options.page';

const routes: Routes = [
  {
    path: '',
    component: ClientOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientOptionsPageRoutingModule {}
