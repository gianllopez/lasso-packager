import { Component, OnDestroy, DoCheck } from '@angular/core';
import { AnimationOptions as AnimConfig } from 'ngx-lottie';
import {  Subscription } from 'rxjs';
import { FetcherService } from 'src/app/services/fetcher/fetcher.service';
import { SongsPackageService } from 'src/app/services/songs-package/songs-package.service';
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
  showSTbutton = false;
  loading = false;
  added = false;
  slideMessage!: string;

  constructor(private fetcher: FetcherService, private songsPackage: SongsPackageService) {};

  onSongChange(): void {
    if (this.song) {
      this.loading = true;
      let song$ = this.fetcher.getSong(this.song);
      this.results = song$.subscribe(data => this.songs = data);
    };    
  };

  addHandler(song: Song): void {
    let notAddedYet = this.songsPackage.addSong(song);
    this.slideMessage = notAddedYet ? 'Succesfully added song!' : 'Already added song!';
    this.added = true;
    setTimeout(() => this.added = false, 700);
  };

  ngDoCheck(): void {
    if (this.songs.length) {
      if (!this.song) { this.songs = [] };
      this.loading = false;
    };
  };

  onScroll(): void {
    this.hideLottie = window.scrollY > 0;
    this.showSTbutton = window.scrollY > 400;
  };

  toTop(): void { window.scrollTo({ top: 0, behavior: 'smooth' }) }

  ngOnDestroy() { this.results?.unsubscribe() };

};
