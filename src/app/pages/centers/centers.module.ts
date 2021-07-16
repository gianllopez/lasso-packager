import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentersRoutingModule } from './centers-routing.module';
import { DownloadComponent } from './download/download.component';
import { InformationComponent } from './information/information.component';
import { QuestionComponent } from './information/question/question.component';


@NgModule({
  declarations: [
    DownloadComponent,
    InformationComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    CentersRoutingModule
  ]
})
export class CentersModule { }
