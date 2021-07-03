import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
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
  songs: Song[] = [];

  constructor(private fetcher: FetcherService) {};

  onSongChange(): void {
    if (this.song) {
      let results = this.fetcher.getSong(this.song);
      results.subscribe(data => this.songs = data)
      console.log(results)
    }; 
  };

};
