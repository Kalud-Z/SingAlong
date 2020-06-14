import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

// ##########################################################################################################################################################
export class HeaderComponent implements OnInit { //###########################################################################################################
  lyricsStillLoading = false;
  videoStillLoading  = false;
  searchInputEntered = false;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.lyricsSearch_LoadingNow.subscribe(data => { this.lyricsStillLoading = data })
    this.dataService.videoSearch_LoadingNow.subscribe(data => { this.videoStillLoading = data })
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
    this.dataService.bindSearchQuery(searchInput.value);
  }

  refreshPage() {
    location.reload();
  }

  onFocus_SearchInput() { this.dataService.searchQueryIsBeingTypedNow = true ; this.searchInputEntered = true }
  onBlur_SearchInput() { this.dataService.searchQueryIsBeingTypedNow = false ; this.searchInputEntered = false }

  
}  //###############################################################################################################################################
// ######################################################################################################################################################
