import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']})
export class InformationComponent {

  asking = false;

  toClose(): void {
    this.asking = false;
  };

  onAsk(): void {
    this.asking = true;
  };

};
