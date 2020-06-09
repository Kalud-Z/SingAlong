import { Component, HostListener, OnInit, Inject, ViewChild, Renderer2, ElementRef } from '@angular/core';
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

  //if you dont specify the read option , you will get the instance of the youtube class itself.
  @ViewChild('youtubeVideoContainer' , { static : false , read: ElementRef }) youtubeVideoContainer : ElementRef; 

  constructor(private renderer : Renderer2) {}


  @HostListener('window:scroll', ['$event']) onWindowScroll(e) { //attatch this call back func to the container. IMPORTANT !!
    const  main = e.target;
    // const  youtubeVideoContainer = e.target.childNodes[1].childNodes[0]
  
    const youtubeVideoContainer_Element = this.youtubeVideoContainer.nativeElement;
    const  youtubeVideoContainer_Height =  youtubeVideoContainer_Element.clientHeight; 

    // console.log(this.youtubeVideoContainer)
    // console.log(this.youtubeVideoContainer.nativeElement)

    // const div  = this.renderer.createElement('div');
    // this.renderer.setStyle(div, 'height', `${youtubeVideoContainer_Height}px`);
    // this.renderer.setStyle(div, 'width', `${youtubeVideoContainer_Height}px`);

    if (main.scrollTop > 400) {
      this.placeVideoOnTheSide = true;
      this.renderer.addClass(youtubeVideoContainer_Element, 'appYoutubeOnTheSide');

    } else {
      this.placeVideoOnTheSide = false;
      this.renderer.removeClass(youtubeVideoContainer_Element, 'appYoutubeOnTheSide');
    }
  }  //HostListener


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
