import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { SynchUIService } from '../_services/synch-ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

// ##########################################################################################################################################################
export class HeaderComponent implements OnInit { //###########################################################################################################
  lyricsStillLoading = false;
  videoStillLoading  = false;
  searchInputBeingEntered = false;

  constructor(private dataService : DataService , private synchUIService : SynchUIService) { }

  ngOnInit(): void {
    this.synchUIService.lyricsSearch_LoadingNow$.subscribe(data => { this.lyricsStillLoading = data });
    this.synchUIService.videoSearch_LoadingNow$.subscribe(data => { this.videoStillLoading = data });
  }

  //searches for both videos and lyrics at the same time
  onSearch(input : HTMLInputElement) {
    if(input.value.length > 0) {
      this.lyricsStillLoading = true;
      this.videoStillLoading = true;
      this.dataService.getLyrics(input.value);
      this.dataService.getVideos(input.value);
      this.synchUIService.lyricsFullScreen$.next(false); //in case we are in fullscreen mode. we wanna exit it, upon a new search.
    }
  }

  typingSearchQuery(searchInput: HTMLInputElement) { this.synchUIService.bindSearchQuery(searchInput.value) }

  refreshPage() { location.reload() }

  onFocus_SearchInput() { this.synchUIService.searchQueryIsBeing$ = true ; this.searchInputBeingEntered = true }
  onBlur_SearchInput() { this.synchUIService.searchQueryIsBeing$ = false ; this.searchInputBeingEntered = false }


}  //###############################################################################################################################################
// ######################################################################################################################################################
