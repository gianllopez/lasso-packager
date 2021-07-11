import { NgModule } from '@angular/core';
import { HelpComponent } from './help.component';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: '', component: HelpComponent }
];

@NgModule({
  declarations: [ HelpComponent, QuestionComponent ],
  imports: [ RouterModule.forChild(routes) ]})
export class HelpModule {};