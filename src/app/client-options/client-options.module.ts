import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientOptionsPageRoutingModule } from './client-options-routing.module';

import { ClientOptionsPage } from './client-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientOptionsPageRoutingModule
  ],
  declarations: [ClientOptionsPage]
})
export class ClientOptionsPageModule {}
