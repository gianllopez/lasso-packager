import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']})
export class CustomInputComponent {

  @Input() placeholder!: string;
  @Input() name!: string;
  @Input() info!: string;

};
