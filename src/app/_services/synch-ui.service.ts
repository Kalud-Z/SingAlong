import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// #########################################################################################################################################################
export class SynchUIService {  //#########################################################################################################################
  lyricsSearch_LoadingNowSubject  = new Subject<boolean>() ;  //controls the loading icon
  videoSearch_LoadingNowSubject   = new Subject<boolean>() ;  //controls the loading icon

  setVideoOnTheSideSubject        = new Subject<boolean>() ;    
  scrolledToEndOfPageSubject      = new Subject<boolean>() ;
  mainScollOfPageSubject          = new Subject<boolean>() ;
  lyricsFullScreenSubject         = new Subject<boolean>() ;

  searchQueryTypedSubject         = new Subject<string>()  ;  
  searchQueryIsBeingTypedNow      = false;  
  
  
  lyricsSearch_StopLoading() { this.lyricsSearch_LoadingNowSubject.next(false) }
  
  videoSearch_StopLoading() { this.videoSearch_LoadingNowSubject.next(false) }

  /**
   * It passes along the searchQuery to the subscribers of 'searchQueryTypedSubject' 
   */
  bindSearchQuery(searchInput : string) { this.searchQueryTypedSubject.next(searchInput) }
  

}  //########################################################################################################################################################
// ##########################################################################################################################################################



