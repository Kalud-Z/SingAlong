import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../_services/ajax.service';
import { DataService } from '../_services/data.service';
import { videoObj } from './video.model';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


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

  searchQuery : string = '';

  constructor(private ajaxService : AjaxService ,
              private dataService : DataService,
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
    // this.selectedVideoURL = 'https://www.youtube.com/embed/' + this.selectedVideoID;
    this.selectedVideoURL = 'https://www.youtube.com/embed/' + this.selectedVideoID + '?controls=0&disablekb=1&enablejsapi=1&fs=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&widgetid=1'
    this.showVideoFrame = true;
    this.showSuggestions = false;
  }

  // https://www.youtube.com/embed/YQHsXMglC9A?controls=0&disablekb=1&enablejsapi=1&fs=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&widgetid=1


}  //#########################################################################################################################################################
// ###########################################################################################################################################################











