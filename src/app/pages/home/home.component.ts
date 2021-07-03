import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { Observable } from 'rxjs';
import { FetcherService } from 'src/app/services/fetcher/fetcher.service';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']})
export class HomeComponent {

  lottieOptions: AnimationOptions = {
    path: '../assets/lotties/blue-waves.json'
  };
  
  song = '';
  songs!: Observable<Song[]>

  constructor(private fetcher: FetcherService) {};

  onSongChange(): void {
    this.songs = this.fetcher.getSong(this.song);
  };

};
