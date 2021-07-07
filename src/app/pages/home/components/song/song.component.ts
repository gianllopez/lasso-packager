import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']})
export class SongComponent {

  @Input() data!: Song;
  @Output() onAdd = new EventEmitter<Song>();

  addToPackage() {
    this.onAdd.emit(this.data);
  };

};
