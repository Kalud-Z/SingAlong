// https://developers.google.com/youtube/iframe_api_reference#seekTo


import { Component, OnInit, Input, HostListener, Output, EventEmitter, Renderer2, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { DataService } from '../_services/data.service';
import { videoObj } from './video.model';
import { DomSanitizer} from '@angular/platform-browser';
import { exitLogoTrigger, displayVideoSuggestionsTrigger } from '../animations';
// import { YouTubePlayer } from '@angular/youtube-player';



@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
  animations : [
    exitLogoTrigger,
    displayVideoSuggestionsTrigger
  ]
})

//############################################################################################################################################################
export class YoutubeComponent implements OnInit {  //#########################################################################################################
  allSuggestions : videoObj[] = [];
  isLoading = false;
  showSuggestions = false;
  @Input() isLyricsFullScreen = false;
  @Input() isVideoOnTheSide = false;
  @Output() videoSelectedEmitter = new EventEmitter<boolean>();
  @ViewChild('videoPlayer' , { static : false}) videoPlayer : ElementRef; 
  @ViewChild('iframeOuterContainer' , { static : false}) iframeOuterContainer : ElementRef; 
  
  iframeOuterContainerHeight_alreadySet = false;

  setVideoOnTheSide = false;
  searchQuery : string = '';


  constructor(private dataService : DataService,
              private sanitizer: DomSanitizer,
              private renderer : Renderer2
              ) { }
            


  ngOnInit() {
    // this.initAPI()
    this.dataService.searchQueryTypedSubject.subscribe(data => { this.searchQuery = data })
    this.dataService.videoSearch_LoadingNow.subscribe(data => { this.isLoading = data })

   this.dataService.allVideosSuggestionsSubject.subscribe(data => {
    this.allSuggestions = data;
    this.showSuggestions = true;
   })

   this.dataService.setVideoOnTheSide.subscribe(data => {
     if(!this.iframeOuterContainerHeight_alreadySet) {
       const desiredHeight = this.iframeOuterContainer.nativeElement.clientHeight;
       this.renderer.setStyle(this.iframeOuterContainer.nativeElement, 'height', `${desiredHeight}px`);
       this.iframeOuterContainerHeight_alreadySet = true;
     }
    
      this.setVideoOnTheSide = data;
   })
  } //ngOnInit


  returnToVideos() {
    this.showSuggestions = true;
    this.showVideoFrame = false;
    this.videoSelectedEmitter.emit(false);

    // console.log('this is player :  BEFORE' , this.player);

    // this.player.clearVideo();
    this.player.destroy();

    // console.log('this is player : AFTER ' , this.player);
  }

  onSearch(searchInput?) {
    console.log('onSearch called')
    this.isLoading = true;
    this.showVideoFrame = false;
    this.dataService.getVideos(searchInput.value)
  }

  onSelectVideo(sugg : videoObj) {
    this.selectedVideoID = sugg.videoID;
    this.selectedVideoURL = 'https://www.youtube.com/embed/' + this.selectedVideoID ;
    this.selectedVideoUrlSafe = this.makeUrlSafe(this.selectedVideoURL);
    
    this.videoSelectedEmitter.emit(true);
    this.showSuggestions = false;
    
    this.showVideoFrame = true;
    
    this.initAPI()
  }


  //I had a pipe that does this. But when i use in the iframe . the video frame loses its controls ! (only pause works !)
  // when I remove the pipe. everything works fine.
  private makeUrlSafe(url : string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  
  onFocus_SearchInput(event) { this.dataService.searchQueryIsBeingTypedNow = true }
  onBlur_SearchInput(event)  { this.dataService.searchQueryIsBeingTypedNow = false }


  // §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§  YOUTUBE IFRAME API  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
  setCalculatedPlayerWidth(event) {
    this.playerWidth = event;
    this.playerHeight = this.playerWidth / 1.777
  }

  videoAlreadyLoadedOnce = false;
  YT: any;
  videoID: string;
  player: any;
  videoState = 1; //= 2 ==> playin // = 1 ==> paused


  // keyCode = 39  arrow right
  // keyCode = 37  arrow left
  // keyCode = 38  arrow up
  // keyCode = 40  arrow down
  // keyCode = 32  space

  @HostListener('document:keydown', ['$event']) handleKeyboardEvent(event: KeyboardEvent) { 
    if(this.player && !this.dataService.searchQueryIsBeingTypedNow) { //otherwise , unexpected error and behavior might occur.
      if(event.keyCode === 39) {  //we skip forward
        this.jumpForward();
      }

      if(event.keyCode === 37) {  //we skip backward
        this.jumpBackward();
      }

      if(event.keyCode === 32) {  //we pause or play
        if(event.target === document.body) { event.preventDefault() }

        if(this.videoState == 1) {
          this.playVideo();
        }
        if(this.videoState == 2) {
          this.pauseVideo();
        }
      }

    } //outer-if
  } //HostListener
        

  // selectedVideoID = 'As0RsSTYbAI'
  selectedVideoID = ''
  
  selectedVideoURL = ''
  selectedVideoUrlSafe : any;
  showVideoFrame = false;

  playerWidth : number 
  playerHeight : number


  initAPI() {
    // Return if Player is already created . in case we wanna play another video . without refreshing the app.
    if (window['YT']) {
      console.log('yes , YT already exists. goin straight to : initVideoPlayer ')
      this.initVideoPlayer();
      return;
    }

    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    /* initVideoPlayer() will create an <iframe> (and YouTube player) after the API code downloads. */
    window['onYouTubeIframeAPIReady'] = () => this.initVideoPlayer();
  }


  initVideoPlayer() {
    this.player = new window['YT'].Player('player', {
      videoId: this.selectedVideoID,
      // videoId: 'tNy8Y7BhUeI',
      height: "100%",
      width: "100%",
      playerVars: {   //these parameters , most of them aint working properly !!! WEIRD 
        autoplay: 0,
        modestbranding: 1,
        controls: 0,
        disablekb: 1,
        rel: 0,
        showinfo: 0,
        fs: 1,
        playsinline: 1,
        enablejsapi : 1,
        iv_load_policy : 3, // annotations => 1 : show | 3 : hide
        cc_load_policy : 1,
        origin : 'http://127.0.0.1:4200/'  // your domain
      },
      events: {
        'onReady'  : this.onPlayerReady
        // 'onStateChange' : this.onPlayerStateChange,
      }
    });

  }

  onPlayerReady(event) {
    event.target.playVideo();
    setTimeout(() => { event.target.pauseVideo() }, 1000)
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


// tried to assign the state value from the event , to a property . it didnt work !! (so I had to keep track of the state manually)
  // onPlayerStateChange(event) {
    // console.log(event)
    // this.changeVideoState(event.data)
  //   this.videoState = event.data
  // };


}  //#########################################################################################################################################################
// ###########################################################################################################################################################






