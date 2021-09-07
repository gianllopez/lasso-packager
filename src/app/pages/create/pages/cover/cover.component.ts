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

  ngOnInit(): void {
    let { data } = window.history.state;
    if (data) {
      this.data = data;
    } else {
      // this.router.navigateByUrl('');
    };
  };
  
  getSafeUrl(source: File | string | null | undefined): CustomSafeUrl | undefined {
    if (!source) return;
    let url = URL.createObjectURL(source),
    safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return { url, safeUrl };
  };

  changeHandler(e: Event, type: string): void {
    let { value, files } = e.target as HTMLInputElement,
    fileSource = this.getSafeUrl(files?.item(0));
    if (fileSource) {
      this.cover = value;
      if (type === 'file') {
        this.preview = fileSource.safeUrl;
      };
    };
  };

  completeHandler(): void {
    let newSong = { ...this.data, cover: this.cover };
    this.pkg.addSong(newSong, false);
    this.added = true;
    setTimeout(() => {
      this.added = false;
      this.router.navigateByUrl('');
    }, 700);
  };

  backHandler(): void {
    this.router.navigate(['/create'], {
      state: { data: this.data }
    });
  };

 

}
