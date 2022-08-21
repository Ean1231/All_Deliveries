import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CverifyPage } from './cverify.page';

const routes: Routes = [
  {
    path: '',
    component: CverifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CverifyPageRoutingModule {}
