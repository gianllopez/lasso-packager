import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadCenterComponent } from './download-center.component';

const routes: Routes = [
  { path: '', component: DownloadCenterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]})
export class DownloadCenterRoutingModule {};
