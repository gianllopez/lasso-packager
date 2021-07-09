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
    let pkg = this.getPackage;
    if (this.notAdded(song)) {
      pkg.push(song); this.setPackage(pkg);
    };
  };

  deleteSong(index: number) {
    let pkg = this.getPackage,
    newPackage = pkg.filter(song => pkg.indexOf(song) !== index);
    this.setPackage(newPackage);
  };

};
