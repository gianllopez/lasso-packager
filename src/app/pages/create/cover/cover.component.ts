import { Component, OnInit, Sanitizer } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss', '../create.styles.scss']})
export class CoverComponent implements OnInit {

  data!: Song;
  cover!: string;

  constructor(private router: Router) {};

  blobToImage(file: File | null | undefined): string {
    let blob = URL.createObjectURL(file);
    return '';
  };

  changeHandler(e: Event, type: string): void {
    let { value, files } = e.target as HTMLInputElement;
    this.cover = type === 'url' ?
      value : this.blobToImage(files?.item(0));
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
