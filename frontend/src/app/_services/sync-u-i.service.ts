import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
export class SyncUIService {
  lyricsSearch_LoadingNow$  = new Subject<boolean>();  //controls the loading icon
  videoSearch_LoadingNow$   = new Subject<boolean>();  //controls the loading icon

  setVideoOnTheSide$        = new Subject<boolean>();
  scrolledToEndOfPage$      = new Subject<boolean>();
  mainScrollOfPage$         = new Subject<boolean>();
  lyricsFullScreen$         = new Subject<boolean>();

  typedSearchQuery$         = new Subject<string>();
  searchQueryIsBeingTypedNow   = false;


  lyricsSearch_StopLoading() { this.lyricsSearch_LoadingNow$.next(false) }
  videoSearch_StopLoading() { this.videoSearch_LoadingNow$.next(false) }
  bindSearchQuery(searchInput : string) { this.typedSearchQuery$.next(searchInput) }

}  //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°




