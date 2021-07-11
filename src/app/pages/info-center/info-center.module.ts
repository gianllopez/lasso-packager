import { NgModule } from '@angular/core';
import { InfoCenterComponent } from './info-center.component';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: '', component: InfoCenterComponent }
];

@NgModule({
  declarations: [ InfoCenterComponent, QuestionComponent ],
  imports: [ RouterModule.forChild(routes) ]})
export class InfoCenterModule {};