// https://developers.google.com/youtube/iframe_api_reference#seekTo


import { Component, OnInit, ViewChild, ViewChildren, QueryList, Input } from '@angular/core';
import { DataService } from '../_services/data.service';
import { videoObj } from './video.model';
import { DomSanitizer} from '@angular/platform-browser';
import { YouTubePlayer } from '@angular/youtube-player';




@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})

//############################################################################################################################################################
export class YoutubeComponent implements OnInit {  //#########################################################################################################
  allSuggestions : videoObj[] = [];
  isLoading = false;
  showSuggestions = false;

  @Input() isLyricsFullScreen = false;

  searchQuery : string = '';
  

  constructor(private dataService : DataService,
              private sanitizer: DomSanitizer
              ) { }

  ngOnInit(): void {
    this.dataService.searchQueryTypedSubject.subscribe(data => { this.searchQuery = data })
    this.dataService.videoSearch_LoadingNow.subscribe(data => { this.isLoading = data })

   this.dataService.allVideosSuggestionsSubject.subscribe(data => {
    this.allSuggestions = data;
    this.showSuggestions = true;
   })
  }


  AfterViewInit() {
    
  }

  returnToVideos() {
    this.showSuggestions = true;
    this.showVideoFrame = false;
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
    this.showSuggestions = false;

     this.videoLength = this.player.getDuration();
  }

  //I had a pipe that does this. But when i use in the iframe . the video frame loses its controls ! (only pause works !)
  // when I remove the pipe. everything works fine.
  private makeUrlSafe(url : string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  // §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§  YOUTUBE IFRAME API  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  @ViewChild('player', {static: true}) player: YouTubePlayer;
  @ViewChild('inputRange', {static: true}) inputRange : any;
  

  // selectedVideoID = 'As0RsSTYbAI'
  selectedVideoID = ''
  
  selectedVideoURL = ''
  selectedVideoUrlSafe : any;
  showVideoFrame = false;

  playerWidth : number = 400
  playerHeight : number = 400

  currentTime  : number = 0;
  videoLength : number 
  // this.videoLength = this.player.getDuration();


  videoInterval : any;

  // setIntervalFunction() {
  // }

  startInterval() {
    this.videoInterval = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime)
    }, 1000);
  }
  
  
  startVideo() {
    this.player.playVideo();
    this.startInterval();
  }

  pauseVideo() {
    this.player.pauseVideo()
    clearInterval(this.videoInterval);
  }

  setCalculatedPlayerWidth(event) {
    // console.log(this.player)
    // console.log('this is player width : ' , event)
    // this.playerWidth = event;
    // this.playerHeight = this.playerWidth / 1.777
    // console.log('this is the width : ' , this.playerWidth)
    // console.log('this is the height : ' , this.playerH
  }

  jumpForward() {
      this.player.seekTo(this.player.getCurrentTime() + 10, true)
  }

  jumpBackward() {
    this.player.seekTo(this.player.getCurrentTime() - 10, true)
  }


  getValue(event) {
    console.log(event.target.value)
    this.currentTime = event.target.value;
    this.player.seekTo(event.target.value, true)
  }

  setValue(inputRange) {
    console.log(inputRange)
    inputRange.value = 86;
    // console.log(inputRange.target.value)
  }


}  //#########################################################################################################################################################
// ###########################################################################################################################################################











