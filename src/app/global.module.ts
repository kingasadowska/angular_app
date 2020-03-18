import * as $ from 'jquery';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from '@app/app-material.module';
import { SharedModule } from '@app/shared';

@NgModule({
  exports: [
    SharedModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class GlobalModule {}
