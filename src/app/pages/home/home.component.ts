import { Component, OnDestroy } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import {  Subscription } from 'rxjs';
import { FetcherService } from 'src/app/services/fetcher/fetcher.service';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']})
export class HomeComponent implements OnDestroy {

  lottieOptions: AnimationOptions = {
    path: '../assets/lotties/blue-waves.json'
  };

  song = '';
  songs: Song[] = [];
  results!: Subscription;

  constructor(private fetcher: FetcherService) {};

  onSongChange(): void {
    if (this.song) {
      let song$ = this.fetcher.getSong(this.song);
      this.results = song$.subscribe(data => this.songs = data);
    }
    if (!this.song && this.songs.length) {
      this.songs = [];
    };
  };

  ngOnDestroy() { this.results.unsubscribe() };

};
