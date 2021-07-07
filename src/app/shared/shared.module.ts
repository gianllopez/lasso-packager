import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const moduleComponents = [
  NavbarComponent,
  CustomInputComponent,
  ActionButtonComponent
];

@NgModule({
  declarations: moduleComponents,
  imports: [ CommonModule, RouterModule ],
  exports: moduleComponents})
export class SharedModule {};