import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent {
  
  // Let the indent like this, it's not a dev error, it's a JS error.
  message = `The songs audio are brought from Youtube
and the tags from the most used music stream platforms,
to create your song, you must to provide a Youtube MP3 URL.`;

};
