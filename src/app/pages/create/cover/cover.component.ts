import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss', '../create.styles.scss'],
  host: { class: 'center-form' }})
export class CoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
