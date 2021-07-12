import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadCenterRoutingModule } from './download-center-routing.module';
import { DownloadCenterComponent } from './download-center.component';

@NgModule({
  declarations: [ DownloadCenterComponent ],
  imports: [ CommonModule, DownloadCenterRoutingModule ]})
export class DownloadCenterModule {};
