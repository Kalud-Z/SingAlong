// https://developers.google.com/youtube/iframe_api_reference#seekTo


import { Component, OnInit, ViewChild, ViewChildren, QueryList, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { DataService } from '../_services/data.service';
import { videoObj } from './video.model';
import { DomSanitizer} from '@angular/platform-browser';
import { exitLogoTrigger } from '../animations';
// import { YouTubePlayer } from '@angular/youtube-player';



@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
  animations : [
    exitLogoTrigger
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

  searchQuery : string = '';


  constructor(private dataService : DataService, private sanitizer: DomSanitizer) { }
              

  ngOnInit() {
    // this.initAPI()
    this.dataService.searchQueryTypedSubject.subscribe(data => { this.searchQuery = data })
    this.dataService.videoSearch_LoadingNow.subscribe(data => { this.isLoading = data })

   this.dataService.allVideosSuggestionsSubject.subscribe(data => {
    this.allSuggestions = data;
    this.showSuggestions = true;
   })
  }


  returnToVideos() {
    this.showSuggestions = true;
    this.showVideoFrame = false;
    this.videoSelectedEmitter.emit(false);

    this.player.destroy()
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
    
    this.showVideoFrame = true;
    this.videoSelectedEmitter.emit(true);
    this.showSuggestions = false;

    this.initAPI()
  }


  //I had a pipe that does this. But when i use in the iframe . the video frame loses its controls ! (only pause works !)
  // when I remove the pipe. everything works fine.
  private makeUrlSafe(url : string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§  YOUTUBE IFRAME API  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
  setCalculatedPlayerWidth(event) {
    this.playerWidth = event;
    this.playerHeight = this.playerWidth / 1.777
  }

  afterFirstVideo = false;
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
    // console.log(event)

    if(event.keyCode === 39) {  //we skip forward
      this.player.seekTo(this.player.getCurrentTime() + 5, true)
    }

    if(event.keyCode === 37) {  //we skip backward
      this.player.seekTo(this.player.getCurrentTime() - 5, true)
    }

    if(event.keyCode === 32) {  //we pause

       if(event.target === document.body) {
        event.preventDefault();
        }

      if(this.videoState == 1) {
        this.player.playVideo();
        setTimeout(() => { this.videoState = 2 }, 50);
      }
      if(this.videoState == 2) {
        this.player.pauseVideo();
        setTimeout(() => { this.videoState = 1 }, 50);
      }

    }
  }
        

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
      playerVars: {   //these parameters , most of them aint working properly !!!
        autoplay: 0,
        modestbranding: 1,
        controls: 1,
        disablekb: 1,
        rel: 0,
        showinfo: 0,
        fs: 0,
        playsinline: 1
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



// tried to assign the state value from the event , to a property . it didnt work !! (so I had to keep track of the state manually)
  // onPlayerStateChange(event) {
    // console.log(event)
    // this.changeVideoState(event.data)
  //   this.videoState = event.data
  // };


}  //#########################################################################################################################################################
// ###########################################################################################################################################################






