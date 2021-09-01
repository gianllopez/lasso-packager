import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ask-me',
  templateUrl: './ask-me.component.html',
  styleUrls: ['./ask-me.component.scss'] })
export class AskMeComponent {

  @Input() show = false;
  @Output() onCancel = new EventEmitter();

  cancelHandler(): void {
    this.onCancel.emit();
  };

};
