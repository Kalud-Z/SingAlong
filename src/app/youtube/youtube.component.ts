import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { videoObj } from './video.model';
import { DomSanitizer} from '@angular/platform-browser';



@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})

//############################################################################################################################################################
export class YoutubeComponent implements OnInit {  //#########################################################################################################
  allSuggestions : videoObj[] = [];
  isLoading = false;


  showVideoFrame = false;
  showSuggestions = false;

  selectedVideoID = ''
  selectedVideoURL = ''
  selectedVideoUrlSafe : any;

  searchQuery : string = '';


  constructor(private dataService : DataService,
              private sanitizer: DomSanitizer
              ) { }

  ngOnInit(): void {
    // this.onSearch('');
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
  }

  onSearch(searchInput?) {
    console.log('onSearch called')
    this.isLoading = true;
    this.showVideoFrame = false;
    this.dataService.getVideos(searchInput.value)
  }

  onSelectVideo(sugg : videoObj) {
    this.selectedVideoID = sugg.videoID;
    this.selectedVideoURL = 'https://www.youtube.com/embed/' + this.selectedVideoID + '?rel=0' ;
    this.selectedVideoUrlSafe = this.makeUrlSafe(this.selectedVideoURL);
    
    this.showVideoFrame = true;
    this.showSuggestions = false;
  }

  //I had a pipe that does this. But when i use in the iframe . the video frame loses its controls ! (only pause works !)
  // when I remove the pipe. everything works fine.
  private makeUrlSafe(url : string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}  //#########################################################################################################################################################
// ###########################################################################################################################################################











