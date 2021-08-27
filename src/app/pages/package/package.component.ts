import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FetcherService } from 'src/app/services/fetcher/fetcher.service';
import { SongsPackageService } from 'src/app/services/songs-package/songs-package.service';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']})
export class PackageComponent implements OnInit, AfterViewChecked {

  _package: Song[] = [];
  newPackage: Song[] = [];
  deleting = false;
  fetching = false;
  isReady = false;
  findex = 0; // fetching index

  downloadUrl!: SafeUrl;

  constructor(
    private pkg: SongsPackageService,
    private sanitizer: DomSanitizer,
    private cdref: ChangeDetectorRef) {};

  loadPackage(): void {
    this._package = this.pkg.getPackage;
  };

  ngOnInit(): void {
    this.loadPackage();
  };

  deleteHandler(index: number) {
    this.pkg.deleteSong(index);
    this.loadPackage();
    this.deleting = true;
    setTimeout(() => this.deleting = false, 750);
  };
  
  clearPackage(): void {
    this.pkg.setPackage([]);
    this.loadPackage();
  };

  // Review good:
  updateFetching(updatedSong: Song): void {
    if (this.findex < this._package.length) {
      this.newPackage.push(updatedSong);
      this.findex++;
    };
    if (this.findex === this._package.length) {
      this.fetching = false;
      this.isReady = true;
      this.pkg.setPackage(this.newPackage);
      let pkgstr = JSON.stringify(this.newPackage),
      url = `data:text/json;charset=UTF-8,${encodeURIComponent(pkgstr)}`,
      json = this.sanitizer.bypassSecurityTrustUrl(url);
      this.downloadUrl = json;
    };
  };
  
  onDownload(): void { this.fetching = true };

  ngAfterViewChecked(): void {
    this.cdref.detectChanges();
  };

};
