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

    if(percent > 31 && percent < 35) {
      this.synchUIService.setVideoOnTheSideSubject.next(true)
    }

    if(percent > 25 && percent < 28) {
      this.synchUIService.setVideoOnTheSideSubject.next(false)
    }

    if(percent > 80 && percent < 90) {
      this.synchUIService.scrolledToEndOfPage.next(false)
    }

    if(percent > 95 && percent < 100) {
      this.synchUIService.scrolledToEndOfPage.next(true)
    }

    // console.log(percent)
  }



} //########################################################################################################################################################
// ##########################################################################################################################################################

