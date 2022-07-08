import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { SyncUIService } from '../_services/sync-u-i.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
export class HeaderComponent implements OnInit {
  lyricsStillLoading = false;
  videoStillLoading  = false;
  searchInputBeingEntered = false;

  constructor(private dataService : DataService , private syncUIService : SyncUIService) { }

  ngOnInit(): void {
    this.syncUIService.lyricsSearch_LoadingNow$.subscribe(data => { this.lyricsStillLoading = data });
    this.syncUIService.videoSearch_LoadingNow$.subscribe(data => { this.videoStillLoading = data });
  }

  //searches for both videos and lyrics at the same time
  onSearch(input : HTMLInputElement) {
    if(input.value.length > 0) {
      this.lyricsStillLoading = true;
      this.videoStillLoading = true;
      this.dataService.getLyricsSuggestions(input.value);
      this.dataService.getVideos(input.value);
      this.syncUIService.lyricsFullScreen$.next(false); //in case we are in fullscreen mode. we wanna exit it, upon a new search.
    }
  }

  typingSearchQuery(searchInput: HTMLInputElement) { this.syncUIService.bindSearchQuery(searchInput.value) }

  refreshPage() { location.reload() }

  onFocus_SearchInput() { this.syncUIService.searchQueryIsBeingTypedNow = true; this.searchInputBeingEntered = true }
  onBlur_SearchInput() { this.syncUIService.searchQueryIsBeingTypedNow = false; this.searchInputBeingEntered = false }


}  //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°

