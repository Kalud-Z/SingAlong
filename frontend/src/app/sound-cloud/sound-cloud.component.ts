import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../_services/ajax.service';

@Component({
  selector: 'app-sound-cloud',
  templateUrl: './sound-cloud.component.html',
  styleUrls: ['./sound-cloud.component.scss']
})
export class SoundCloudComponent implements OnInit {

  constructor(private ajaxService : AjaxService) { }

  ngOnInit(): void {
    //  this.ajaxService.searchSoundCloudTracks();
  }

}
