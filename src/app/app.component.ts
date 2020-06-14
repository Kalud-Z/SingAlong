import { Component } from '@angular/core';
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
export class AppComponent  {  //############################################################################################################################
  hideBackgroundImage = false;
  isLyricsFullScreen = false;

  videoSelected = false;

  //if you dont specify the read option , you will get the instance of the youtube class itself.
  // @ViewChild('youtubeVideoContainer' , { static : false , read: ElementRef }) youtubeVideoContainer : ElementRef; 

  constructor() {}


  onLyricsFullScreen(event) {
    this.isLyricsFullScreen = event;
    console.log('we just tun full svren');
    console.log('and thisi the isLyricsFullScreen ' , this.isLyricsFullScreen)
  }


  // ###################################################################################################################################################
}  //###########################################################################################################################################################
