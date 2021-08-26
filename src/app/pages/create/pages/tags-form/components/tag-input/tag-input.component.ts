import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss']})
export class TagInputComponent {

  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() control!: AbstractControl | null;

  get formControl() {
    return this.control as FormControl;
  };
  
};
