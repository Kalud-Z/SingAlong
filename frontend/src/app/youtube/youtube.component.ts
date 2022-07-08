// https://developers.google.com/youtube/iframe_api_reference#seekTo

import { Component, OnInit, Input, HostListener, Output, EventEmitter, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';


import { displayVideoSuggestionsTrigger, iframeOuterContainerTrigger, closeVideoIconTrigger } from '../animations';
import { SyncUIService } from '../_services/sync-u-i.service';
import { DataService } from '../_services/data.service';
import { videoObj } from './video.model';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
  animations : [
    closeVideoIconTrigger,
    displayVideoSuggestionsTrigger,
    iframeOuterContainerTrigger
  ]
})

//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
export class YoutubeComponent implements OnInit {
  allSuggestions : videoObj[] = [];
  isLoading = false;
  showSuggestions = false;
  searchInputEntered = false;
  iframeOuterContainerHeight_alreadySet = false;
  setVideoOnTheSide = false;
  scrolledToEndOfPage = false;
  searchQuery : string = '';

  @Input()  isLyricsFullScreen = false;
  @Output() videoSelectedEmitter = new EventEmitter<boolean>();

  @ViewChild('videoPlayer' , { static : false}) videoPlayer : ElementRef;
  @ViewChild('iframeOuterContainer' , { static : false}) iframeOuterContainer : ElementRef;

  constructor(private dataService : DataService,
              private sanitizer: DomSanitizer,
              private renderer : Renderer2,
              private syncUIService : SyncUIService
              ) { }



  ngOnInit() {
    this.syncUIService.typedSearchQuery$.subscribe(data => { this.searchQuery = data })

    this.syncUIService.videoSearch_LoadingNow$.subscribe(data => { this.isLoading = data })

    this.dataService.allVideosSuggestions$.subscribe(data => {
      if(this.showVideoFrame) { this.returnToVideos()  }
      this.allSuggestions = data;
      this.showSuggestions = true;
    })

    this.syncUIService.setVideoOnTheSide$.subscribe(data => {
      // to make sure the container doesn't lose its height, when the video moves to the side.
     if(!this.iframeOuterContainerHeight_alreadySet) {
       const desiredHeight = this.iframeOuterContainer.nativeElement.clientHeight;
       this.renderer.setStyle(this.iframeOuterContainer.nativeElement, 'height', `${desiredHeight}px`);
       this.iframeOuterContainerHeight_alreadySet = true;
     }
      this.setVideoOnTheSide = data;
    })

    this.syncUIService.scrolledToEndOfPage$.subscribe(data => { this.scrolledToEndOfPage = data })
  } //ngOnInit


  returnToVideos() {
    this.showSuggestions = true;
    this.showVideoFrame = false;
    this.videoSelectedEmitter.emit(false);
    this.player.destroy(); //so we can load another video afterwards, by creating a new player.
  }

  onSearch(searchInput : HTMLInputElement) {
    if(this.showVideoFrame) { this.returnToVideos() } //we close the video in case it is opened.
    this.isLoading = true;
    this.showVideoFrame = false;
    this.dataService.getVideos(searchInput.value)
  }

  onSelectVideo(sugg : videoObj) {
    this.selectedVideoID = sugg.videoID;
    this.videoSelectedEmitter.emit(true);

    this.showSuggestions = false;
    this.showVideoFrame = true;

    this.initYoutubeIframeAPI()
  }


  onFocus_SearchInput() { this.syncUIService.searchQueryIsBeingTypedNow = true  ; this.searchInputEntered = true }
  onBlur_SearchInput()  { this.syncUIService.searchQueryIsBeingTypedNow = false ; this.searchInputEntered = false }


  // §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§  YOUTUBE IFRAME API  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


  selectedVideoID = ''
  YT: any;
  videoID: string;
  player: any;
  videoState = 1; //= 2 ==> playin // = 1 ==> paused
  isVideoMuted = false;
  videoAlreadyLoadedOnce = false;
  showVideoFrame = false;

  @ViewChild('volumeRangeSlider' , { static : false}) volumeRangeSlider : ElementRef;


  // keyCode = 39  arrow right
  // keyCode = 37  arrow left
  // keyCode = 38  arrow up
  // keyCode = 40  arrow down
  // keyCode = 32  space

  @HostListener('document:keydown', ['$event']) handleKeyboardEvent(event: KeyboardEvent) {
    if(this.player && !this.syncUIService.searchQueryIsBeingTypedNow) { //otherwise , unexpected error and behavior might occur.
      if(event.keyCode === 39) {  //we skip forward
        this.jumpForward();
      }

      if(event.keyCode === 37) {  //we skip backward
        this.jumpBackward();
      }

      if(event.keyCode === 32) {  //we pause or play
        if(event.target === document.body) { event.preventDefault() }

        if(this.videoState == 1) { this.playVideo() }
        if(this.videoState == 2) { this.pauseVideo() }
      }

    } //outer-if
  } //HostListener


  initYoutubeIframeAPI() {
    // Return if Player is already created . in case we wanna play another video . without refreshing the app.
    if (window['YT']) {
      this.initVideoPlayer();
      return;
    }

    let tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    /* initVideoPlayer() will create an <iframe> (and YouTube player) after the API code downloads. */
    window['onYouTubeIframeAPIReady'] = () => this.initVideoPlayer();
  }


  initVideoPlayer() {
    this.player = new window['YT'].Player('player', {
      videoId: this.selectedVideoID,
      height: "100%",
      width: "100%",
      playerVars: {
        autoplay: 0,
        modestbranding: 1,
        controls: 1,
        disablekb: 1,
        rel: 0,
        showinfo: 0,
        fs: 0,
        enablejsapi : 1,
        iv_load_policy : 3, // annotations => 1 : show | 3 : hide
        cc_load_policy : 0
      },
    });

  }

  playVideo() {
    this.player.playVideo()
    setTimeout(() => { this.videoState = 2 }, 50)
  }

  pauseVideo() {
    this.player.pauseVideo()
    setTimeout(() => { this.videoState = 1 }, 50);
  }

  jumpBackward() {
    this.player.seekTo(this.player.getCurrentTime() - 5, true)
  }

  jumpForward() {
    this.player.seekTo(this.player.getCurrentTime() + 5, true)
  }

  muteVideo() {
    this.player.mute();
    this.isVideoMuted = true;
    this.volumeRangeSlider.nativeElement.value = 2;
  }

  unmuteVideo() {
    this.player.unMute();
    this.isVideoMuted = false;
  }

  changeVolume(event) {
    this.unmuteVideo();
    this.player.setVolume(event.target.value);
  }

  toggleVideo() {
    if(this.videoState === 1) { this.playVideo() }
    if(this.videoState === 2) { this.pauseVideo() }
  }

}  //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°







