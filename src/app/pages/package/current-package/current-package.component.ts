import { Component, OnInit } from '@angular/core';
import { SongsPackageService } from 'src/app/services/songs-package/songs-package.service';
import { PackagedSong, Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'current-package',
  templateUrl: './current-package.component.html',
  styleUrls: ['./current-package.component.scss']})
export class CurrentPackageComponent implements OnInit {

  pkg!: PackagedSong[];  

  constructor(private songsPackageService: SongsPackageService) {};

  ngOnInit(): void {
    this.pkg = this.songsPackageService.getPackage();
  };

  parseHash(song: PackagedSong): string {
    return Object.keys(song)[0];
  };

  parseData(song: PackagedSong): Song {
    return Object.values(song)[0];
  };

  deleteHandler(hash: string) {
    console.log(hash);
  };

};
