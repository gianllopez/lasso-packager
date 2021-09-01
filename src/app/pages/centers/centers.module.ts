import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentersRoutingModule } from './centers-routing.module';
import { DownloadComponent } from './pages/download/download.component';
import { InformationComponent } from './pages/information/information.component';
import { QuestionComponent } from './pages/information/components/question/question.component';
import { AskMeComponent } from './pages/information/components/ask-me/ask-me.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DownloadComponent,
    InformationComponent,
    QuestionComponent,
    AskMeComponent
  ],
  imports: [
    CommonModule,
    CentersRoutingModule,
    SharedModule
  ]
})
export class CentersModule { }
