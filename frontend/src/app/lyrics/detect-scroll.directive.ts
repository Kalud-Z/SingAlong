import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { SyncUIService } from '../_services/sync-u-i.service';

@Directive({
  selector: '[appDetectScroll]'
})

//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
export class detectScroll {
  constructor(private syncUIService : SyncUIService) {}


  @HostListener("scroll", ["$event"]) onListenerTriggered(event): void {
    const percent = Math.round((event.srcElement.scrollTop / (event.srcElement.scrollHeight - event.srcElement.clientHeight)) * 100);

    if(percent < 2) {
      this.syncUIService.scrolledToEndOfPage$.next(false);
      this.syncUIService.mainScrollOfPage$.next(false);
    }

    if(percent > 2 && percent < 98) {
      this.syncUIService.mainScrollOfPage$.next(true);
      this.syncUIService.scrolledToEndOfPage$.next(false);
    }

    if(percent >= 98 && percent <= 100) {
      this.syncUIService.scrolledToEndOfPage$.next(true);
      this.syncUIService.mainScrollOfPage$.next(false);
    }

    if(percent >= 0 && percent < 11) {
      this.syncUIService.setVideoOnTheSide$.next(false)
    }

    if(percent > 14 && percent < 33) {
      this.syncUIService.setVideoOnTheSide$.next(true)
    }

  }



} //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°


