import { Component, Input } from '@angular/core';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']})
export class SongComponent {

  @Input() song!: Song;
  isfav!: boolean;
  downloading!: boolean;

  formatTitle = () => this.song?.title.replace(' ', '-').toLowerCase();

  getIcon = (icon: string) => `'../../../../../assets/icons/${icon}.svg`;

  setDownload() {
    this.downloading = !this.downloading;
    console.log('Fetching download...');
  };

  setFav() {
    this.isfav = !this.isfav;
    console.log('Fetching fav...');
  };

};
