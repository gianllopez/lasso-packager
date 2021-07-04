import { Component, Input } from '@angular/core';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']})
export class SongComponent {

  @Input() data!: Song;

  formatTitle = () => this.data?.title.replace(' ', '-').toLowerCase();

  getIcon = (icon: string) => `../../../../../assets/icons/actions/${icon}.svg`;

  setDownload() {
    console.log('Fetching download...');
  };

  addToPackage() {
    console.log('Adding to current package...');
  };

};
