import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SongsPackageService } from 'src/app/services/songs-package/songs-package.service';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']})
export class PackageComponent implements OnInit {

  _package!: Song[];
  downloadURL!: SafeUrl;
  deleting = false;

  constructor(private pkg: SongsPackageService, private sanitizer: DomSanitizer) {};

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
  
  onDownload(): void {
    let pkgstr = JSON.stringify(this._package),
    url = `data:text/json;charset=UTF-8,${encodeURIComponent(pkgstr)}`,
    json = this.sanitizer.bypassSecurityTrustUrl(url);
    this.downloadURL = json;
  };

};
