import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']})
export class CustomInputComponent {

  @Input() placeholder!: string;
  @Input() name!: string;
  @Input() info!: string;

  // Let the indent like this, it's not a dev error, it's a JS error.
  message = `The songs audio are brought from Youtube
and the tags from the most used music stream platforms,
to create your song,you must to provide a Youtube MP3 URL.`;
  
};
