import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractorLoginPageRoutingModule } from './contractor-login-routing.module';

import { ContractorLoginPage } from './contractor-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractorLoginPageRoutingModule
  ],
  declarations: [ContractorLoginPage]
})
export class ContractorLoginPageModule {}
