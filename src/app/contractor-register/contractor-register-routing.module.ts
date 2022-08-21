import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractorRegisterPage } from './contractor-register.page';

const routes: Routes = [
  {
    path: '',
    component: ContractorRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractorRegisterPageRoutingModule {}
