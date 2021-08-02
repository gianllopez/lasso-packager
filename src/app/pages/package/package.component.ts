import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FetcherService } from 'src/app/services/fetcher/fetcher.service';
import { SongsPackageService } from 'src/app/services/songs-package/songs-package.service';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']})
export class PackageComponent implements OnInit {

  _package!: Song[];
  newPackage: Song[] = [];
  deleting = false;
  fetching = false;
  findex = 0; // fetching index

  constructor(private pkg: SongsPackageService, private fetcher: FetcherService) {};

  updatePackage(): void {
    this._package = this.pkg.getPackage;
  };

  ngOnInit(): void { this.updatePackage() };

  deleteHandler(index: number) {
    this.pkg.deleteSong(index);
    this.updatePackage();
    this.deleting = true;
    setTimeout(() => this.deleting = false, 750);
  };
  
  clearPackage(): void {
    this.pkg.setPackage([]);
    this.updatePackage();
  };

  updatedFetching(updatedSong: Song): void {
    if (this.findex < this._package.length) {
      this.newPackage.push(updatedSong);
      this.findex++;
      console.log(this.findex, this._package.length)
    };
    if (this.findex === this._package.length) {
      this.fetching = false;
      this.pkg.setPackage(this.newPackage);            
    };
  };
  
  onDownload(): void {
    this.fetching = true;
  };

};
