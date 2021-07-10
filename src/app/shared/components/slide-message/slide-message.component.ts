import { Component, Input } from '@angular/core';

@Component({
  selector: 'slide-message',
  templateUrl: './slide-message.component.html',
  styleUrls: ['./slide-message.component.scss']})
export class SlideMessageComponent {

  @Input() display!: boolean;
  @Input() message!: string;
  @Input() danger!: boolean;

};
