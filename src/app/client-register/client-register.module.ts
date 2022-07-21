import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientRegisterPageRoutingModule } from './client-register-routing.module';

import { ClientRegisterPage } from './client-register.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ClientRegisterPageRoutingModule
  ],
  declarations: [ClientRegisterPage]
})
export class ClientRegisterPageModule {}
