import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'})
export class AppComponent {

  lottieOptions: AnimationOptions = { path: '../assets/lotties/blue-waves.json' };

};
