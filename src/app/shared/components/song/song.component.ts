import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FetcherService } from 'src/app/services/fetcher/fetcher.service';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']})
export class SongComponent implements OnChanges {

  fetched = false;

  constructor(private fetcher: FetcherService) {};

  @Input() data!: Song;
  @Input() index!: number;
  @Input() fetchingIndex!: number;
  @Input() loading!: boolean;

  @Output() onAdd = new EventEmitter<Song>();
  @Output() onDelete = new EventEmitter<number>();
  @Output() onFetched = new EventEmitter<Song>();


  addToPackage(): void {
    this.onAdd.emit(this.data);
  };

  deleteFromPackage(): void {
    this.onDelete.emit(this.index);
  };

  async ngOnChanges(): Promise<void> {
    let isFetching = this.fetchingIndex === this.index;
    if (this.loading && isFetching) {
      let url = await this.fetcher.getUrl(this.data.title || ''),
      updatedSong = { ...this.data, ...url };
      this.onFetched.emit(updatedSong);
      this.fetched = true;
    };
  };

};
