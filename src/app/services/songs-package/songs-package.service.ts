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

  notAddedYet(song: Song): boolean {
    let data: Song[] = this.getPackage;
    return data.every(item => item.cover !== song.cover);
  };

  addSong(song: Song) {
    let pkg = this.getPackage,
    wasntAdded = this.notAddedYet(song);
    if (wasntAdded) {
      pkg.push(song); this.setPackage(pkg);
    };
    return wasntAdded;
  };

  deleteSong(index: number) {
    let pkg = this.getPackage,
    newPackage = pkg.filter(song => pkg.indexOf(song) !== index);
    this.setPackage(newPackage);
  };

};
