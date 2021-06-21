import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { UrlComponent } from './url/url.component';


@NgModule({
  declarations: [
    UrlComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule
  ]
})
export class CreateModule { }
