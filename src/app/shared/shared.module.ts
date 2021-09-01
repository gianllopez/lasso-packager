import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SongComponent } from './components/song/song.component';
import { IconNameDirective } from './directives/icon-name.directive';
import { SlideMessageComponent } from './components/slide-message/slide-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from './components/field/field.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SongComponent,
    ActionButtonComponent,
    IconNameDirective,
    SlideMessageComponent,
    FieldComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    SongComponent,
    ActionButtonComponent,
    IconNameDirective,    
    SlideMessageComponent,
    FieldComponent,
    ReactiveFormsModule
  ]})
export class SharedModule {};