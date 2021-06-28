import { Component, Input } from '@angular/core';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']})
export class SongComponent {

  @Input() song!: Song;

  formatTitle = () => this.song?.title.replace(' ', '-').toLowerCase();

  getIcon = (icon: string) => `../../../../../assets/icons/actions/${icon}.svg`;

  setDownload() {
    console.log('Fetching download...');
  };

  setFav() {
    console.log('Fetching fav...');
  };

};
