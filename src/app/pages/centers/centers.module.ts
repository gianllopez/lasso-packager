import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentersRoutingModule } from './centers-routing.module';
import { DownloadComponent } from './pages/download/download.component';
import { InformationComponent } from './pages/information/information.component';
import { QuestionComponent } from './pages/information/components/question/question.component';


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
