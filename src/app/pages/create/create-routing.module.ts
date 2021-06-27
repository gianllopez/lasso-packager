import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlComponent } from './url/url.component';
import { CoverComponent } from './cover/cover.component';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [
  { path: 'url', component: UrlComponent },
  { path: 'cover', component: CoverComponent },
  { path: 'tags', component: TagsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]})
export class CreateRoutingModule {};
