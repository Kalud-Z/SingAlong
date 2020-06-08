import { Component, HostListener, OnInit, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { lyricsFullScreenTrigger } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [
    lyricsFullScreenTrigger
  ]
})
// ##########################################################################################################################################################
export class AppComponent implements OnInit {  //############################################################################################################################
  hideBackgroundImage = false;
  isLyricsFullScreen = false;

  placeVideoOnTheSide = false;
  videoSelected = false;


  constructor(@Inject(DOCUMENT) document) {}


  @HostListener('window:scroll', ['$event']) onWindowScroll(e) { //attatch this call back func to the container. IMPORTANT !!
    var main = e.target;
    var youtubeVideo = e.target.childNodes[1].childNodes[0]
    // console.log(main.scrollTop)
    if (main.scrollTop > 400) {
      this.placeVideoOnTheSide = true;
      youtubeVideo.classList.add('appYoutubeOnTheSide');
    } else {
      this.placeVideoOnTheSide = false;
      youtubeVideo.classList.remove('appYoutubeOnTheSide');
    }
  }


  ngOnInit() {
    // window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  // scroll() {
  //   var container = document.querySelector('.container');
  //   var position = container.scrollTop;
  //   // console.log(position)
  //   if(position > 400) {
  //     this.placeVideoOnTheSide = true;
  //     console.log(this.placeVideoOnTheSide)
  //   } else {
  //     this.placeVideoOnTheSide = false;
  //     console.log(this.placeVideoOnTheSide)
  //   }
  // };


  onLyricsFullScreen(event) {
    this.isLyricsFullScreen = event;
    console.log('we just tun full svren');
    console.log('and thisi the isLyricsFullScreen ' , this.isLyricsFullScreen)
  }


  // ###################################################################################################################################################
}  //###########################################################################################################################################################
