import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { displayVideoSuggestionsTrigger, displayLyricsSuggestionsTrigger, displayChosenLyricTrigger, displayEnlargeIconTrigger } from '../animations';

import { DataService } from '../_services/data.service';
import { LyricObj } from './lyrics.model';
import { SynchUIService } from '../_services/synch-ui.service';

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

//############################################################################################################################################################
export class LyricsComponent implements OnInit {  //##########################################################################################################
  allSuggestions : LyricObj[] = [];

  lyricsCurrentFontSize : number = 1.5;
  selectedLyric : string;
  selectedTitle : string;
  FinalTextToDisplay : string = '';
  searchQuery : string = '';

  isLoading = false;
  searchInputBeingEntered = false;
  isLyricsFullScreen = false;
  showSuggestions = false;
  showLyricsContainer = false;
  scrolledToEndOfPage = false;
  mainPageScrolled = false;

  @Output() hideBackgroundImageEmitter = new EventEmitter<boolean>();
  @Output() lyricsFullScreenEmitter = new EventEmitter<boolean>();
  @Input() isVideoSelected = false;


  constructor(private dataService : DataService , private synchUIService : SynchUIService) { }

  ngOnInit(): void {
    this.synchUIService.searchQueryTypedSubject.subscribe(data => { this.searchQuery = data })
    this.synchUIService.lyricsSearch_LoadingNowSubject.subscribe(data => { this.isLoading = data })
    this.dataService.allLyricsSuggestionsSubject.subscribe((data : any) => {
      this.allSuggestions = data;
      this.showSuggestions = true;
    })
    this.synchUIService.lyricsFullScreenSubject.subscribe(data => {
      this.isLyricsFullScreen = data;
    })

  }

  onSearch(searchInput : HTMLInputElement) {
    this.isLoading = true;
    this.dataService.getLyrics(searchInput.value);
  }

  onSelectLyric(lyricObj : LyricObj) {
    this.hideBackgroundImageEmitter.emit(true);
    this.selectedLyric = lyricObj.lyrics;
    this.selectedTitle = lyricObj.title;
    this.FinalTextToDisplay =  this.selectedTitle + '\n \n \n' + this.selectedLyric;
  
    this.showSuggestions = false;
    this.showLyricsContainer = true;
  }

  onFullScreenLyrics() {
    if(this.isVideoSelected) {
      this.lyricsFullScreenEmitter.emit(true);
      this.isLyricsFullScreen = true;
      this.synchUIService.scrolledToEndOfPageSubject.subscribe(data => { this.scrolledToEndOfPage = data })
      this.synchUIService.mainScollOfPageSubject.subscribe(data => { this.mainPageScrolled = data })
    }
  }

  onShrinkLyrics() {
    this.lyricsFullScreenEmitter.emit(false);
    this.synchUIService.lyricsFullScreenSubject.next(false);
    this.synchUIService.setVideoOnTheSideSubject.next(false);
  }

  
  increaseFontSize() {
    if(this.lyricsCurrentFontSize < 2.5) { this.lyricsCurrentFontSize += 0.5 }
  }

  decreaseFontSize() {
    if(this.lyricsCurrentFontSize > 1.5) { this.lyricsCurrentFontSize -= 0.5 }
  }

  
  onFocus_SearchInput() { this.synchUIService.searchQueryIsBeingTypedNow = true ; this.searchInputBeingEntered = true }
  onBlur_SearchInput() { this.synchUIService.searchQueryIsBeingTypedNow = false ; this.searchInputBeingEntered = false }


}  //########################################################################################################################################################
// ##########################################################################################################################################################





/* 
str = `[Verse 1]
Hello, it's me
I was wondering if after all these years you'd like to meet
To go over everything
They say that time's supposed to heal ya, but I ain't done much healing
Hello, can you hear me?
I'm in California dreaming about who we used to be
When we were younger and free
I've forgotten how it felt before the world fell at our feet

[Pre-Chorus]
There's such a difference between us
And a million miles

[Chorus]
Hello from the other side
I must've called a thousand times
To tell you I'm sorry for everything that I've done
But when I call, you never seem to be home
Hello from the outside
At least, I can say that I've tried
To tell you I'm sorry for breaking your heart
But it don't matter, it clearly doesn't tear you apart anymore

[Verse 2]
Hello, how are you?
It's so typical of me to talk about myself, I'm sorry
I hope that you're well
Did you ever make it out of that town where nothing ever happened?

[Pre-Chorus]
It's no secret that the both of us
Are running out of time

[Chorus]`

strFinal = 'Adele milionssss \n \n \n' + this.str;

 */