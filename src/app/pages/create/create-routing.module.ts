import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './cover/cover.component';
import { MainFormComponent } from './main-form/main-form.component';

const routes: Routes = [
  { path: '', component: MainFormComponent },
  { path: 'cover', component: CoverComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]})
export class CreateRoutingModule {};
