import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from './download/download.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
  { path: 'download', component: DownloadComponent },
  { path: 'information', component: InformationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]})
export class CentersRoutingModule { }
