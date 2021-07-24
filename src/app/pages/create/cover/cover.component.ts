import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss', '../create.styles.scss']})
export class CoverComponent implements OnInit {

  data!: Song;
  cover!: SafeUrl;

  constructor(private router: Router, private sanitizer: DomSanitizer) {};

  getSafeUrl(file: File | string | null | undefined): SafeUrl {
    let url = URL.createObjectURL(file),
    safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return safeUrl;
  };

  changeHandler(e: Event, type: string): void {
    let { value, files } = e.target as HTMLInputElement;
    this.cover = type === 'url' ? value : this.getSafeUrl(files?.item(0));
  };

  debugFn(): void {
    console.log(this.cover);
  };

  ngOnInit(): void {
    let { data } = window.history.state;
    if (!data) {
      // this.router.navigateByUrl('');
    } else {
      this.data = data;
    };
  };

}
