import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'})
export class AppComponent {

  lottieOptions: AnimationOptions = {
    path: '../assets/lotties/blue-waves.json'
  };

  lastScroll = 0;
  hideLottie = false;

  hideLottieOnScroll() {
    let currentScroll = window.scrollY;
    this.hideLottie = currentScroll > this.lastScroll;
    console.log(this.hideLottie)
    this.lastScroll = currentScroll;      
  };

};
