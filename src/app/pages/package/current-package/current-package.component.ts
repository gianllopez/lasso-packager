import { Component, OnInit } from '@angular/core';
import { SongsPackageService } from 'src/app/services/songs-package/songs-package.service';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'current-package',
  templateUrl: './current-package.component.html',
  styleUrls: ['./current-package.component.scss']})
export class CurrentPackageComponent implements OnInit {

  pkg!: Song[];  

  constructor(private songsPackageService: SongsPackageService) {};

  ngOnInit(): void {
    this.pkg = this.songsPackageService.getPackage;
  };

  deleteHandler(index: number) {
    this.songsPackageService.deleteSong(index);
  };

};
