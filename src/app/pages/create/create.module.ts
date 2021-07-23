import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { MainFormComponent } from './main-form/main-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoverComponent } from './cover/cover.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainFormComponent,
    CoverComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class CreateModule { }
