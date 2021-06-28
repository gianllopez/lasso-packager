import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlComponent } from './url/url.component';
import { CoverComponent } from './cover/cover.component';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [
  { path: 'url', component: UrlComponent , data: { waveLottie: 'blue-waves.json'}},
  { path: 'cover', component: CoverComponent , data: { waveLottie: 'blue-waves.json'}},
  { path: 'tags', component: TagsComponent, data: { waveLottie: 'blue-waves.json'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]})
export class CreateRoutingModule {};
