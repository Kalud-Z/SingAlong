import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { SynchUIService } from '../_services/synch-ui.service';

@Directive({
  selector: '[appDetectScroll]'
})

// #######################################################################################################################################################
export class detectScroll {  //#########################################################################################################################
  constructor(private synchUIService : SynchUIService) {}


  @HostListener("scroll", ["$event"]) onListenerTriggered(event): void {
    const percent = Math.round((event.srcElement.scrollTop / (event.srcElement.scrollHeight - event.srcElement.clientHeight)) * 100);
    // console.log(percent)

    if(percent < 2) {
      this.synchUIService.scrolledToEndOfPage$.next(false);
      this.synchUIService.mainScollOfPage$.next(false);
    }

    if(percent > 2 && percent < 98) {
      this.synchUIService.mainScollOfPage$.next(true);
      this.synchUIService.scrolledToEndOfPage$.next(false);
    }


    if(percent >= 98 && percent <= 100) {
      this.synchUIService.scrolledToEndOfPage$.next(true);
      this.synchUIService.mainScollOfPage$.next(false);
    }

    if(percent >= 0 && percent < 11) {
      this.synchUIService.setVideoOnTheSide$.next(false)
    }

    if(percent > 14 && percent < 33) {
      this.synchUIService.setVideoOnTheSide$.next(true)
    }

    // console.log(percent)
  }



} //########################################################################################################################################################
// ##########################################################################################################################################################

