import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateRoutingModule } from './create-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagsFormComponent } from './pages/tags-form/tags-form.component';
import { TagInputComponent } from './pages/tags-form/components/tag-input/tag-input.component';
import { CoverComponent } from './pages/cover/cover.component';

@NgModule({
  declarations: [
    TagsFormComponent,
    CoverComponent,
    TagInputComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class CreateModule {};
