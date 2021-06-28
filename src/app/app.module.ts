import { NgModule } from '@angular/core';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SongComponent } from './pages/home/components/song/song.component';
import { SharedModule } from './shared/shared.module';
import { IconNameDirective } from './pages/home/directives/icon-name.directive';

export const playerFactory = () => player;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongComponent,
    IconNameDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]})
export class AppModule {};
