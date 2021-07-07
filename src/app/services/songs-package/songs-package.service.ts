import { Injectable } from '@angular/core';
import { Song } from 'src/app/shared/shared.models';

@Injectable({ providedIn: 'root' })
export class SongsPackageService {

  getPackage() {
    let storage = localStorage.getItem('PACKAGE');
    return JSON.parse(storage || '{}');
  };

  wasntAdded(song: Song): boolean {
    let data = Object.values(this.getPackage()) as Song[];    
    return data.every(item => item.cover !== song.cover);
  };

  addSong(song: Song) {
    if (this.wasntAdded(song)) {
      let hash = Math.random().toString(36).substr(2, 5),
      newItems = { ...this.getPackage(), [hash]: song };
      localStorage.setItem('PACKAGE', JSON.stringify(newItems));      
    };
  };

};
