import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractorOptionsPage } from './contractor-options.page';

const routes: Routes = [
  {
    path: '',
    component: ContractorOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractorOptionsPageRoutingModule {}
