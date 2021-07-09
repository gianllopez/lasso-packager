import { Injectable } from '@angular/core';
import { Song } from 'src/app/shared/shared.models';

@Injectable({ providedIn: 'root' })
export class SongsPackageService {

  get getPackage(): Song[] {
    let storage = localStorage.getItem('PACKAGE');
    return JSON.parse(storage || '[]');
  };

  setPackage(newpkg: Song[]): void {
    localStorage.setItem('PACKAGE', JSON.stringify(newpkg));
  };

  notAdded(song: Song): boolean {
    let data: Song[] = this.getPackage;
    return data.every(item => item.cover !== song.cover);
  };

  addSong(song: Song) {
    let pkg: Song[] = this.getPackage;
    if (this.notAdded(song)) {
      pkg.push(song); this.setPackage(pkg);
    };
  };

  deleteSong(index: number) {
    console.log(index)
  };

};
