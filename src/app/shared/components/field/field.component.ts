import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  encapsulation: ViewEncapsulation.None })
export class FieldComponent {

  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() control!: AbstractControl | null;

  get formControl() {
    return this.control as FormControl;
  };
  
};
