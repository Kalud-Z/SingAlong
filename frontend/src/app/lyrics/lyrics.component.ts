import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { displayVideoSuggestionsTrigger, displayLyricsSuggestionsTrigger, displayChosenLyricTrigger, displayEnlargeIconTrigger } from '../animations';

import { DataService } from '../_services/data.service';
import { Lyric } from './lyrics.model';
import { SyncUiService } from '../_services/sync-ui.service';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
  animations : [
    displayVideoSuggestionsTrigger,
    displayLyricsSuggestionsTrigger,
    displayChosenLyricTrigger,
    displayEnlargeIconTrigger
  ]
})

//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
export class LyricsComponent implements OnInit {
  allSuggestions: Lyric[] = [];

  lyricsCurrentFontSize: number = 1.5;
  selectedLyric: string;
  selectedTitle: string;
  FinalTextToDisplay: string = '';
  searchQuery: string = '';

  isLoading = false;
  searchInputBeingEntered = false;
  isLyricsFullScreen = false;
  showSuggestions = false;
  showLyricsContainer = false;
  scrolledToEndOfPage = false;
  mainPageScrolled = false;
  fetchingLyricLoader = false;

  @Output() hideBackgroundImageEmitter = new EventEmitter<boolean>();
  @Output() lyricsFullScreenEmitter = new EventEmitter<boolean>();
  @Input()  isVideoSelected = false;

  constructor(private dataService : DataService ,
              private syncUIService : SyncUiService) { }

  ngOnInit(): void {
    this.syncUIService.typedSearchQuery$.subscribe(data => { this.searchQuery = data })
    this.syncUIService.lyricsSearch_LoadingNow$.subscribe(data => { this.isLoading = data })
    this.dataService.allLyricsSuggestions$.subscribe((data : any) => {
      this.allSuggestions = data;
      this.showSuggestions = true;
      this.showLyricsContainer = false;
    });
    this.syncUIService.lyricsFullScreen$.subscribe(data => {
      this.isLyricsFullScreen = data;
    })
  }

  onSearch(searchInput : HTMLInputElement) {
    this.isLoading = true;
    this.dataService.getLyricsSuggestions(searchInput.value);
  }

  async onSelectLyric(lyricObj: Lyric) {
    this.fetchingLyricLoader = true;
    await this.dataService.getLyricText(lyricObj).then((data:any) => {
      lyricObj.lyricText = data.lyrics;
      this.fetchingLyricLoader = false;

      this.hideBackgroundImageEmitter.emit(true);
      this.selectedLyric = lyricObj.lyricText;
      this.selectedTitle = lyricObj.fullTitle;
      this.FinalTextToDisplay = this.selectedTitle + '\n \n \n' + this.selectedLyric;

      this.showSuggestions = false;
      this.showLyricsContainer = true;
    })
        .catch(err => {
          console.log('error occurred while trying to connect to the server' , err);
          alert('error occurred while trying to connect to the server : ' + err);
        });
  }

  onFullScreenLyrics() {
    if(this.isVideoSelected) {
      this.lyricsFullScreenEmitter.emit(true);
      this.isLyricsFullScreen = true;
      this.syncUIService.scrolledToEndOfPage$.subscribe(data => { this.scrolledToEndOfPage = data })
      this.syncUIService.mainScrollOfPage$.subscribe(data => { this.mainPageScrolled = data })
    }
  }

  onShrinkLyrics() {
    this.lyricsFullScreenEmitter.emit(false);
    this.syncUIService.lyricsFullScreen$.next(false);
    this.syncUIService.setVideoOnTheSide$.next(false);
  }

  increaseFontSize() {
    if(this.lyricsCurrentFontSize < 2.5) { this.lyricsCurrentFontSize += 0.5 }
  }

  decreaseFontSize() {
    if(this.lyricsCurrentFontSize > 1.5) { this.lyricsCurrentFontSize -= 0.5 }
  }

  onFocus_SearchInput() { this.syncUIService.searchQueryIsBeingTypedNow = true; this.searchInputBeingEntered = true }
  onBlur_SearchInput() { this.syncUIService.searchQueryIsBeingTypedNow = false; this.searchInputBeingEntered = false }

}  //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
