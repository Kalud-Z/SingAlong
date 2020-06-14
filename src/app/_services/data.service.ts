import { Injectable } from '@angular/core';
import { LyricObj } from '../lyrics/lyrics.model';
import { AjaxService } from './ajax.service';
import { Subject } from 'rxjs';
import { videoObj } from '../youtube/video.model';

@Injectable({
  providedIn: 'root'
})

/**
 * This service is responsible for handling the returned data from the APIs. It manipulates it and forwards it to the components.
 */
// #########################################################################################################################################################
export class DataService {  //##############################################################################################################################
  
  allLyricsSuggestions : LyricObj[] = [];
  allLyricsSuggestionsSubject = new Subject<LyricObj[]>() ;
  lyricsSearch_LoadingNow  = new Subject<boolean>() ;
  

  allVideosSuggestions : videoObj[] = [];
  allVideosSuggestionsSubject = new Subject<videoObj[]>() ;
  videoSearch_LoadingNow   = new Subject<boolean>() ;
  setVideoOnTheSide = new Subject<boolean>() ;

  searchQueryTypedSubject  = new Subject<string>() ; 
  searchQueryIsBeingTypedNow: boolean = false;
  generalSearch_LoadingNow = new Subject<boolean>() ;


  constructor(private ajaxService : AjaxService) {}

  /**
   * It delivers the searchQuery to the subscribers of 'searchQueryTypedSubject' 
   */
  bindSearchQuery(searchInput : string) {
    this.searchQueryTypedSubject.next(searchInput);
  }

  /**
   * It delivers the 'allLyricsSuggestions' to the subscribers of 'allLyricsSuggestionsSubject'.
   */
  lyricsNotify() {
    this.allLyricsSuggestionsSubject.next(this.allLyricsSuggestions);
  }


  videosNotify() {
    this.allVideosSuggestionsSubject.next(this.allVideosSuggestions);
    // console.log('this is thevideo list :' , this.allVideosSuggestions)
  }


  /**
   * This method is called by a component.
   * It fill the 'allLyricsSuggestions' array with  'LyricObj' objects.
   * @param searchQuery entered by the user.
   */
  getLyrics(searchQuery : string) {
    this.allLyricsSuggestions = [];  // delete previous data.

    this.ajaxService.searchLyrics(searchQuery).subscribe((data : any) => {
      data.content.forEach((el, index) => {
        const newLyric = new LyricObj(index+1, el.artist , el.lyrics , el.title);
        this.allLyricsSuggestions.push(newLyric);
      })
      this.lyricsNotify();
      this.lyricsSearch_LoadingNow.next(false);
    })

  }


  getVideos(searchQuery : string) {
    this.allVideosSuggestions = [];
    this.ajaxService.searchVideo(searchQuery).subscribe((data : any) => {
      // console.log(data)
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


