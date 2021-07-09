import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']})
export class SongComponent {

  @Input() data!: Song;
  @Input() packagedID!: string;

  @Output() onAdd = new EventEmitter<Song>();
  @Output() onDelete = new EventEmitter();

  addToPackage() { this.onAdd.emit(this.data) };

  deleteFromPackage() { this.onDelete.emit(this.packagedID) }; 

};
