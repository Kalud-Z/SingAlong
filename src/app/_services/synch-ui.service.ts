import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// #########################################################################################################################################################
export class SynchUIService {  //#########################################################################################################################
  lyricsSearch_LoadingNow$  = new Subject<boolean>() ;  //controls the loading icon
  videoSearch_LoadingNow$   = new Subject<boolean>() ;  //controls the loading icon

  setVideoOnTheSide$        = new Subject<boolean>() ;
  scrolledToEndOfPage$      = new Subject<boolean>() ;
  mainScollOfPage$          = new Subject<boolean>() ;
  lyricsFullScreen$         = new Subject<boolean>() ;

  searchQueryTyped$         = new Subject<string>()  ;
  searchQueryIsBeing$       = false;


  lyricsSearch_StopLoading() { this.lyricsSearch_LoadingNow$.next(false) }

  videoSearch_StopLoading() { this.videoSearch_LoadingNow$.next(false) }

  /**
   * It passes along the searchQuery to the subscribers of 'searchQueryTypedSubject'
   */
  bindSearchQuery(searchInput : string) { this.searchQueryTyped$.next(searchInput) }


}  //########################################################################################################################################################
// ##########################################################################################################################################################



