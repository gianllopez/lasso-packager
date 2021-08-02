import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']})
export class SongComponent {

  @Input() data!: Song;
  @Input() index!: number;
  @Input() loading!: boolean;

  @Output() onAdd = new EventEmitter<Song>();
  @Output() onDelete = new EventEmitter<number>();

  addToPackage(): void {
    this.onAdd.emit(this.data);
  };

  deleteFromPackage(): void {
    this.onDelete.emit(this.index);
  };

};
