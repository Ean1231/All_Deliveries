import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapturePackagePageRoutingModule } from './capture-package-routing.module';

import { CapturePackagePage } from './capture-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapturePackagePageRoutingModule
  ],
  declarations: [CapturePackagePage]
})
export class CapturePackagePageModule {}
