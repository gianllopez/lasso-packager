import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SongComponent } from './components/song/song.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { IconNameDirective } from './directives/icon-name.directive';
import { SlideMessageComponent } from './components/slide-message/slide-message.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    SongComponent,
    CustomInputComponent,
    ActionButtonComponent,
    IconNameDirective,
    SlideMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    SongComponent,
    CustomInputComponent,
    ActionButtonComponent,
    IconNameDirective,    
    SlideMessageComponent,
    ReactiveFormsModule
  ]})
export class SharedModule {};