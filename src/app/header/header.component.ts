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
    this.synchUIService.lyricsSearch_LoadingNowSubject.subscribe(data => { this.lyricsStillLoading = data })
    this.synchUIService.videoSearch_LoadingNowSubject.subscribe(data => { this.videoStillLoading = data })
  }

  onSearch(input : HTMLInputElement) {
    if(input.value.length > 0) {
      this.lyricsStillLoading = true;
      this.videoStillLoading = true;
      this.dataService.getLyrics(input.value);
      this.dataService.getVideos(input.value);
    }
  }

  typingSearchQuery(searchInput  : HTMLInputElement) {
    this.synchUIService.bindSearchQuery(searchInput.value);
  }

  refreshPage() {
    location.reload();
  }

  onFocus_SearchInput() { this.synchUIService.searchQueryIsBeingTypedNow = true ; this.searchInputBeingEntered = true } 
  onBlur_SearchInput() { this.synchUIService.searchQueryIsBeingTypedNow = false ; this.searchInputBeingEntered = false }

  
}  //###############################################################################################################################################
// ######################################################################################################################################################
