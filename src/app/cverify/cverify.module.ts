import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CverifyPageRoutingModule } from './cverify-routing.module';

import { CverifyPage } from './cverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CverifyPageRoutingModule
  ],
  declarations: [CverifyPage]
})
export class CverifyPageModule {}
