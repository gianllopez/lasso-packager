import { Component } from '@angular/core';
import { FetcherService } from 'src/app/services/fetcher/fetcher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']})
export class HomeComponent {

  song = '';

  constructor(private fetcher: FetcherService) {};

  onSongChange(): void {
    this.fetcher.getSong(this.song);
  };

};
