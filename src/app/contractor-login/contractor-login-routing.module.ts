import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractorLoginPage } from './contractor-login.page';

const routes: Routes = [
  {
    path: '',
    component: ContractorLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractorLoginPageRoutingModule {}
