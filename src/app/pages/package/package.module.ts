import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageRoutingModule } from './package-routing.module';
import { PackageComponent } from './package.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ PackageComponent ],
  imports: [
    CommonModule,
    PackageRoutingModule,
    SharedModule
  ]
})
export class PackageModule {};
