import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SongComponent } from './pages/home/components/song/song.component';
import { SharedModule } from './shared/shared.module';
import { IconNameDirective } from './pages/home/directives/icon-name.directive';

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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]})
export class AppModule {};
