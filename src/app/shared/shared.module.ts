import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SongComponent } from './components/song/song.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { IconNameDirective } from './directives/icon-name.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    SongComponent,
    CustomInputComponent,
    ActionButtonComponent,
    IconNameDirective
  ],
  imports: [ CommonModule, RouterModule ],
  exports: [
    NavbarComponent,
    SongComponent,
    CustomInputComponent,
    ActionButtonComponent,
    IconNameDirective
  ]})
export class SharedModule {};