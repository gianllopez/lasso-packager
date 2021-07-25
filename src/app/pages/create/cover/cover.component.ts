import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CustomSafeUrl, Song } from 'src/app/shared/shared.models';
import { SongsPackageService } from 'src/app/services/songs-package/songs-package.service';

@Component({
  selector: 'cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss', '../create.styles.scss']})
export class CoverComponent implements OnInit {

  data!: Song;
  cover = '';
  preview!: SafeUrl;

  added = false;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private pkg: SongsPackageService) {};

  getSafeUrl(file: File | string | null | undefined): CustomSafeUrl {
    let url = URL.createObjectURL(file),
    safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return { url, safeUrl };
  };

  changeHandler(e: Event, type: string): void {
    let { value, files } = e.target as HTMLInputElement,
    fileSource = this.getSafeUrl(files?.item(0));
    this.cover = type === 'url' ? value : fileSource.url;
    if (type === 'file') {
      this.preview = fileSource.safeUrl;
    };
  };

  completeHandler(): void {
    let newSong = { ...this.data, cover: this.cover || 'default' };
    this.pkg.addSong(newSong);
    this.added = true;
    setTimeout(() => this.added = false, 700);
  };

  backHandler(): void {
    this.router.navigate(['/create'], {
      state: { data: this.data }
    });
  };

  ngOnInit(): void {
    let { data } = window.history.state;
    if (data) {
      this.data = data;
    } else {
      // this.router.navigateByUrl('');
    };
  };

}
