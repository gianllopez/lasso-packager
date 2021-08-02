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
  completePackage: Song[] = [];
  deleting = false;
  fetching = false;

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
  
  async onDownload(): Promise<void> {
    this.fetching = true;
    for (let song of this._package) {
      let url = await this.fetcher.getUrl(song.title);
      this.completePackage.push({ ...song, ...url });
    };
    console.log(this.completePackage);
  };

};
