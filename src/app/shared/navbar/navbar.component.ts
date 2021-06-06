import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']})
export class NavbarComponent {

  @HostListener('click', ['$event']) onClick (e: MouseEvent) {
    let { children } = (e.target as Element);
    children[0].classList.toggle('blade-1-anim');
    children[1].classList.toggle('blade-2-anim');
    children[2].classList.toggle('blade-3-anim'); 
  };
  
};
