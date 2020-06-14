import { Component, OnInit } from '@angular/core';
import { lyricsFullScreenTrigger } from './animations';
import { SynchUIService } from './_services/synch-ui.service';


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

  videoSelected = false;

  constructor(private synchUIService : SynchUIService) {}

  ngOnInit() {
    this.synchUIService.lyricsFullScreenSubject.subscribe(data => {
      this.isLyricsFullScreen = data;
    })
  }

  onLyricsFullScreen(event) {
    this.isLyricsFullScreen = event;
  }


  // ###################################################################################################################################################
}  //###########################################################################################################################################################
