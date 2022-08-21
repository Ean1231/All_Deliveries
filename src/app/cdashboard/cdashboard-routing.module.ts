import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdashboardPage } from './cdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdashboardPageRoutingModule {}
