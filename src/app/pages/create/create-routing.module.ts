import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlComponent } from './url/url.component';

const routes: Routes = [
  { path: 'url', component: UrlComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]})
export class CreateRoutingModule {};
