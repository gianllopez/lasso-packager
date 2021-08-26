import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './pages/cover/cover.component';
import { TagsFormComponent } from './pages/tags-form/tags-form.component';

const routes: Routes = [
  { path: '', component: TagsFormComponent },
  { path: 'cover', component: CoverComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]})
export class CreateRoutingModule {};
