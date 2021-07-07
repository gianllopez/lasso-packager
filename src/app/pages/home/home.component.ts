import { Component, OnDestroy, DoCheck } from '@angular/core';
import { AnimationOptions as AnimConfig } from 'ngx-lottie';
import {  Subscription } from 'rxjs';
import { FetcherService } from 'src/app/services/fetcher/fetcher.service';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']})
export class HomeComponent implements OnDestroy, DoCheck {

  wavesLottie: AnimConfig = { path: '../assets/lotties/blue-waves.json' };
  loaderLottie: AnimConfig = { path: '../assets/lotties/loader.json' };

  song = '';
  songs: Song[] = [];
  results!: Subscription;

  hideLottie = false;
  loading = false;

  constructor(private fetcher: FetcherService) {};

  onSongChange(): void {
    if (this.song) {
      this.loading = true;
      let song$ = this.fetcher.getSong(this.song);
      this.results = song$.subscribe(data => this.songs = data);
    };    
  };

  ngDoCheck(): void {
    if (this.songs.length) {
      if (!this.song) { this.songs = [] };
      this.loading = false;
    };
  };

  lottieOnScroll() { this.hideLottie = window.scrollY > 0 };

  ngOnDestroy() { this.results?.unsubscribe() };

};
