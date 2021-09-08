import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { CustomSafeUrl, Song } from 'src/app/shared/shared.models';
import { SongsPackageService } from 'src/app/services/songs-package/songs-package.service';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss', '../create.styles.scss']})
export class CoverComponent implements OnInit {

  data!: Song;
  cover!: File | undefined;
  preview!: SafeUrl | undefined;

  added = false;
  loading = false;

  @ViewChild('coverinput') cvInput!: ElementRef;

  constructor(
    private firebase: FirebaseService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private pkg: SongsPackageService) {};

  ngOnInit(): void {
    let { data } = window.history.state;
    if (data) {
      this.data = data;
    } else {
      this.router.navigateByUrl('');
    };
  };
  
  getSafeUrl(source: File | string | null | undefined): CustomSafeUrl | undefined {
    if (!source) return;
    let url = URL.createObjectURL(source),
    safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return { url, safeUrl };
  };

  changeHandler(e: Event): void {
    let { files } = e.target as HTMLInputElement,
    file = files?.item(0);
    if (file) {
      let fileSource = this.getSafeUrl(file);
      this.cover = file;
      this.preview = fileSource?.safeUrl;
    };
  };

  async completeHandler(): Promise<void> {
    let newSong = { ...this.data };
    if (this.cover) {
      this.loading = true;
      let coverUrl = await this.firebase.uploadCover(this.cover);
      this.loading = false;
      newSong = { ...newSong, cover: coverUrl };
    };
    this.pkg.addSong(newSong, false);
    this.added = true;
    setTimeout(() => {
      this.added = false;
      this.router.navigateByUrl('');
    }, 1000);
  };

  backHandler(): void {
    this.router.navigate(['/create'], {
      state: { data: this.data }
    });
  };

  onClearCover(): void {
    this.cover = undefined;
    this.preview = '';
    let input = <HTMLInputElement>this.cvInput.nativeElement;
    input.value = '';
  };

};
