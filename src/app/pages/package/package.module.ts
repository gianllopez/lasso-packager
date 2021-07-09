import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageRoutingModule } from './package-routing.module';
import { CurrentPackageComponent } from './current-package/current-package.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ CurrentPackageComponent ],
  imports: [
    CommonModule,
    PackageRoutingModule,
    SharedModule
  ]
})
export class PackageModule {};
