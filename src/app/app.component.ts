import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// ##########################################################################################################################################################
export class AppComponent {  //############################################################################################################################
  hideBackgroundImage = false;

  isLyricsFullScreen = false;


  onLyricsFullScreen(event) {
    this.isLyricsFullScreen = event;
    console.log('we just tun full svren');
    console.log('and thisi the isLyricsFullScreen ' , this.isLyricsFullScreen)
  }


  // ###################################################################################################################################################
}  //###########################################################################################################################################################
