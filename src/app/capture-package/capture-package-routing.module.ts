import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapturePackagePage } from './capture-package.page';

const routes: Routes = [
  {
    path: '',
    component: CapturePackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapturePackagePageRoutingModule {}
