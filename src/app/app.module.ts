import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from "@angular/youtube-player";


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { AdjustLyricPipe } from './lyrics/adjust-lyric.pipe';
import { SearchFieldComponent } from './_shared/search-field/search-field.component';
import { LoadingSpinnerComponent } from './_shared/loading-spinner/loading-spinner.component';
import { SafePipe } from './safe.pipe';
import { SoundCloudComponent } from './sound-cloud/sound-cloud.component';
import { AdjustPlayerSizeDirective } from './youtube/adjust-player-size.directive';

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
    SoundCloudComponent,
    AdjustPlayerSizeDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
