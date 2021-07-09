import { Injectable } from '@angular/core';
import { PackagedSong, Song } from 'src/app/shared/shared.models';

@Injectable({ providedIn: 'root' })
export class SongsPackageService {

  getPackage(): PackagedSong[] {
    let storage = localStorage.getItem('PACKAGE');
    return JSON.parse(storage || '[]');
  };

  notAddedYet(song: Song): boolean {
    let data: PackagedSong[] = this.getPackage();
    return data.every(item => {
      let itemData: Song = Object.values(item)[0];
      return itemData.cover !== song.cover;
    });
  };

  addSong(song: Song) {
    let pkg: PackagedSong[] = this.getPackage();
    if (this.notAddedYet(song)) {
      let hash: string = Math.random().toString(36).substr(2, 5);      
      pkg.push({ [hash]: song });
      localStorage.setItem('PACKAGE', JSON.stringify(pkg));      
    };
  };

};
