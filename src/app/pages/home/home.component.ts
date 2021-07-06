import { Component, OnDestroy } from '@angular/core';
import { AnimationOptions as AnimConfig } from 'ngx-lottie';
import {  Subscription } from 'rxjs';
import { FetcherService } from 'src/app/services/fetcher/fetcher.service';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']})
export class HomeComponent implements OnDestroy {

  wavesLottie: AnimConfig = { path: '../assets/lotties/blue-waves.json' };
  loaderLottie: AnimConfig = { path: '../assets/lotties/loader.json' };

  song = '';
  songs: Song[] = [];
  results!: Subscription;

  hideLottie = false;
  loading = false;

  constructor(private fetcher: FetcherService) {};

  onSongChange(): void {
    this.loading = true;
    if (this.song) {
      let song$ = this.fetcher.getSong(this.song);
      this.results = song$.subscribe(data => this.songs = data);
    }
    if (!this.song && this.songs.length) {
      this.songs = [];
    };
    this.loading = false;
  };

  lottieOnScroll() { this.hideLottie = window.scrollY > 0 };

  ngOnDestroy() { this.results.unsubscribe() };

};
