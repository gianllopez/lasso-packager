import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HelpComponent }
];

@NgModule({
  declarations: [ HelpComponent ],
  imports: [ RouterModule.forChild(routes) ]})
export class HelpModule {};