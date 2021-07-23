import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from 'src/app/shared/shared.models';

@Component({
  selector: 'cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss', '../create.styles.scss'],
  host: { class: 'center-form' }})
export class CoverComponent implements OnInit {

  data!: Song;

  constructor(private router: Router) {};

  ngOnInit(): void {
    let { data } = window.history.state;
    if (!data) {
      this.router.navigateByUrl('');
    } else {
      this.data = data;
    };
  };

}
