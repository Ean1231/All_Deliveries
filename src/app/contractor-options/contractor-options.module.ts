import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractorOptionsPageRoutingModule } from './contractor-options-routing.module';

import { ContractorOptionsPage } from './contractor-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractorOptionsPageRoutingModule
  ],
  declarations: [ContractorOptionsPage]
})
export class ContractorOptionsPageModule {}
