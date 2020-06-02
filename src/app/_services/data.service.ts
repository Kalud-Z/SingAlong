import { Injectable } from '@angular/core';
import { LyricObj } from '../lyrics/lyrics.model';
import { AjaxService } from './ajax.service';
import { Subject } from 'rxjs';
import { videoObj } from '../youtube/video.model';

@Injectable({
  providedIn: 'root'
})

// #########################################################################################################################################################
export class DataService {  //##############################################################################################################################
  allLyricsSuggestionsSubject = new Subject<LyricObj[]>() ;
  allVideosSuggestionsSubject = new Subject<videoObj[]>() ;

  searchQueryTypedSubject = new Subject<string>() ;
  generalSearch_LoadingNow = new Subject<boolean>() ;
  lyricsSearch_LoadingNow = new Subject<boolean>() ;
  videoSearch_LoadingNow = new Subject<boolean>() ;

  allLyricsSuggestions : LyricObj[] = [];
  allVideosSuggestions : videoObj[] = [];


  constructor(private ajaxService : AjaxService) {}

  bindSearchQuery(searchInput) {
    this.searchQueryTypedSubject.next(searchInput);
  }

  lyricsNotify() {
    this.allLyricsSuggestionsSubject.next(this.allLyricsSuggestions);
  }


  videosNotify() {
    this.allVideosSuggestionsSubject.next(this.allVideosSuggestions);
    console.log('this is thevideo list :' , this.allVideosSuggestions)
  }


  getLyrics(searchQuery : string , caller? : string) {
    this.allLyricsSuggestions = [];

    this.ajaxService.searchLyrics(searchQuery).subscribe((data : any) => {
      data.content.forEach((el, index) => {
        const newLyric = new LyricObj(index+1, el.artist , el.lyrics , el.title);
        this.allLyricsSuggestions.push(newLyric);
      })
      this.lyricsNotify();
      this.lyricsSearch_LoadingNow.next(false);
    })


  }


  getVideos(searchQuery : string , caller? : string) {
    // console.log('inside getVideos : this is search query ' , searchQuery)

    this.allVideosSuggestions = [];
    this.ajaxService.searchVideo(searchQuery).subscribe((data : any) => {
      console.log(data)
      const allItems = data.items;
      allItems.forEach(el => {
        const newVideoObj = new videoObj( this.transformHTMLChars(el.snippet.title), el.id.videoId , el.snippet.thumbnails.high.url);
        this.allVideosSuggestions.push(newVideoObj);
      })
      this.videosNotify();
      this.videoSearch_LoadingNow.next(false);
    })

  }



  // §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§ PRIVATE  §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

    
  private transformHTMLChars(str:string): string {
    str = str.replace(/&#039;/gi , "'");
    str = str.replace(/&#39;/gi , "'");
    str = str.replace(/&amp;/gi , "&");
    str = str.replace(/&lt;/gi , "<");
    str = str.replace(/&gt;/gi , ">");
    str = str.replace(/&quot;/gi , '"');

    return str;
  }




  // #####################################################################################################################################################
}  //######################################################################################################################################################


