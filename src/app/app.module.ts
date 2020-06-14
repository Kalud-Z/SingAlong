import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { AdjustLyricPipe } from './lyrics/adjust-lyric.pipe';
import { SearchFieldComponent } from './_shared/search-field/search-field.component';
import { LoadingSpinnerComponent } from './_shared/loading-spinner/loading-spinner.component';
import { SafePipe } from './safe.pipe';
import { AdjustPlayerSizeDirective } from './youtube/adjust-player-size.directive';
import { MoveVideoToTheSideDirective } from './directives/move-video-to-the-side.directive';
import { detectScroll } from './lyrics/detect-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    YoutubeComponent,
    LyricsComponent,
    AdjustLyricPipe,
    SearchFieldComponent,
    LoadingSpinnerComponent,
    SafePipe,
    AdjustPlayerSizeDirective,
    MoveVideoToTheSideDirective,
    detectScroll,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
