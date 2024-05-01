import { Injectable } from '@angular/core';
import { Lyric } from '../lyrics/lyrics.model';
import { AjaxService } from './ajax.service';
import { Subject } from 'rxjs';
import { videoObj } from '../youtube/video.model';
import { SyncUiService } from './sync-ui.service';
import { getLyrics, getSong } from 'genius-lyrics-api';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  allLyricsSuggestions: Lyric[] = [];
  allLyricsSuggestions$ = new Subject<Lyric[]>() ;

  allVideosSuggestions: videoObj[] = [];
  allVideosSuggestions$ = new Subject<videoObj[]>() ;

  constructor(private ajaxService: AjaxService, private syncUIService: SyncUiService) {}

  lyricsNotify() {
    this.allLyricsSuggestions$.next(this.allLyricsSuggestions);
  }

  videosNotify() {
    this.allVideosSuggestions$.next(this.allVideosSuggestions);
  }

  getLyricsSuggestions(searchQuery: string) {
    this.allLyricsSuggestions = [];
    this.ajaxService.searchForLyricsFromGeniusAPI(searchQuery).subscribe((res : any) => {
        res.hits.forEach(el => {
          const newLyric = {} as Lyric;
          newLyric.artist = el.result.primary_artist.name;
          newLyric.fullTitle = el.result.full_title;
          newLyric.title = el.result.title;
          newLyric.songID = el.result.id;
          newLyric.lyricPath = el.result.path;
          this.allLyricsSuggestions.push(newLyric);
        });
        this.lyricsNotify();
        this.syncUIService.lyricsSearch_StopLoading();
      },
      err => {
        console.log('fetching lyrics error : ', err);
        alert(err.error.messages);
      });
  }

  async getLyricText(lyricObj: Lyric) {
      return await this.ajaxService.scrapeLyricFromGeniusAPI(lyricObj);
  }

  getVideos(searchQuery : string) {
      this.allVideosSuggestions = [];
      this.ajaxService.fetchVideoFromYouTubeAPI(searchQuery).subscribe((data : any) => {
        const allItems = data.items;
        allItems.forEach(el => {
          const newVideoObj = new videoObj(this.transformHTMLChars(el.snippet.title), el.id.videoId, el.snippet.thumbnails.high.url);
          this.allVideosSuggestions.push(newVideoObj);
        });
        this.videosNotify();
        this.syncUIService.videoSearch_StopLoading();
      },
        err => {
          console.log('fetching videos Error', err);
          alert('Error while fetching videos : ' + err);
        });
  }

  private transformHTMLChars(str: string): string {
    str = str.replace(/&#039;/gi , "'");
    str = str.replace(/&#39;/gi , "'");
    str = str.replace(/&amp;/gi , "&");
    str = str.replace(/&lt;/gi , "<");
    str = str.replace(/&gt;/gi , ">");
    str = str.replace(/&quot;/gi , '"');
    return str;
  }

}


