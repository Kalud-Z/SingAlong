import { Component, HostListener, OnInit, Inject, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { lyricsFullScreenTrigger } from './animations';
import { DataService } from './_services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [
    lyricsFullScreenTrigger
  ]
})
// ##########################################################################################################################################################
export class AppComponent  {  //############################################################################################################################
  hideBackgroundImage = false;
  isLyricsFullScreen = false;

  placeVideoOnTheSide = false;
  videoSelected = false;

  //if you dont specify the read option , you will get the instance of the youtube class itself.
  // @ViewChild('youtubeVideoContainer' , { static : false , read: ElementRef }) youtubeVideoContainer : ElementRef; 

  constructor(private renderer : Renderer2 , private dataService : DataService) {}


  @HostListener('window:scroll', ['$event']) onWindowScroll(e) { //attatch this call back func to the container. IMPORTANT !!
    const  main = e.target;
    // const youtubeVideoContainer_Element = this.youtubeVideoContainer.nativeElement;

    if (main.scrollTop > 500) { this.dataService.setVideoOnTheSide.next(true) } 
    else if (main.scrollTop < 485) { this.dataService.setVideoOnTheSide.next(false) }
  }  //HostListener


  @HostListener('window:focus', ['$event']) onWindowFocus(e) { //attatch this call back func to the container. IMPORTANT !!
    // const  main = e.target;
    // console.log('foxuussss : ' , e.target.document)
  }  //HostListener



  onLyricsFullScreen(event) {
    this.isLyricsFullScreen = event;
    console.log('we just tun full svren');
    console.log('and thisi the isLyricsFullScreen ' , this.isLyricsFullScreen)
  }


  // ###################################################################################################################################################
}  //###########################################################################################################################################################
