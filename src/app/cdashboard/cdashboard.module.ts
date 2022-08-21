import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CdashboardPageRoutingModule } from './cdashboard-routing.module';

import { CdashboardPage } from './cdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CdashboardPageRoutingModule
  ],
  declarations: [CdashboardPage]
})
export class CdashboardPageModule {}
