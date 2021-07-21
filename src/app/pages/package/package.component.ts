import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SongsPackageService } from 'src/app/services/songs-package/songs-package.service';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']})
export class PackageComponent implements OnInit {

  pkg!: Song[];
  deleting = false;

  constructor(private songsPackageService: SongsPackageService) {};

  updatePackage(): void {
    this.pkg = this.songsPackageService.getPackage;
  };

  ngOnInit(): void { this.updatePackage() };

  deleteHandler(index: number) {
    this.songsPackageService.deleteSong(index);
    this.updatePackage();
    this.deleting = true;
    setTimeout(() => this.deleting = false, 750);
  };

  clearPackage(): void {
    this.songsPackageService.setPackage([]);
    this.updatePackage();
  };

};
