import { Component, OnInit } from '@angular/core';
import { lyricsFullScreenTrigger } from './animations';
import { SyncUiService } from './_services/sync-ui.service';
import { AjaxService } from './_services/ajax.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [
    lyricsFullScreenTrigger
  ]
})

//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
export class AppComponent implements OnInit {
  hideBackgroundImage = false;
  isLyricsFullScreen = false;

  videoSelected = false;

  constructor(private synchUIService : SyncUiService, private  ajaxService : AjaxService) {}

  ngOnInit() {
    this.synchUIService.lyricsFullScreen$.subscribe(data => {
      this.isLyricsFullScreen = data;
    });
  }

  onLyricsFullScreen(event) {
    this.isLyricsFullScreen = event;
  }

}  //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
