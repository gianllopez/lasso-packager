import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FetcherService } from 'src/app/services/fetcher/fetcher.service';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']})
export class HomeComponent {

  song = '';
  songs!: Observable<Song[]>

  constructor(private fetcher: FetcherService) {};

  onSongChange(): void {
    this.songs = this.fetcher.getSong(this.song);
  };

};
