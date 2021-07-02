import { NgModule } from '@angular/core';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SongComponent } from './pages/home/components/song/song.component';
import { SharedModule } from './shared/shared.module';
import { IconNameDirective } from './pages/home/directives/icon-name.directive';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]})
export class AppModule {};
