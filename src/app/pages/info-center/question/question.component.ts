import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']})
export class QuestionComponent {

  @Input() title!: string;
  show = false;
  
  @HostListener('click')
  onClick(): void { this.show = !this.show };

};
