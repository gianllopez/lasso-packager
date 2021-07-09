import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageRoutingModule } from './package-routing.module';
import { CurrentPackageComponent } from './current-package/current-package.component';

@NgModule({
  declarations: [ CurrentPackageComponent ],
  imports: [ CommonModule, PackageRoutingModule ]})
export class PackageModule {};
