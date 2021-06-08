import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']})
export class NavbarComponent {

  open = false;
  
  setOpen() { this.open = !this.open };

};