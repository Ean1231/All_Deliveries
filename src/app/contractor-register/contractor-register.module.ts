import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MatStepperModule } from '@angular/material/stepper';

import {MatFormFieldModule } from '@angular/material/form-field';

import { ContractorRegisterPageRoutingModule } from './contractor-register-routing.module';

import { ContractorRegisterPage } from './contractor-register.page';

import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';


import { MatInputModule } from '@angular/material/input';



@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    IonicModule,
    FormsModule,
    MatInputModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ContractorRegisterPageRoutingModule
  ],
  declarations: [ContractorRegisterPage]
})
export class ContractorRegisterPageModule {}
