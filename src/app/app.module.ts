import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { detectScroll } from './lyrics/detect-scroll.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    YoutubeComponent,
    LyricsComponent,
    detectScroll,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
