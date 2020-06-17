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
    console.log(percent)

    if(percent < 2) {
      this.synchUIService.scrolledToEndOfPageSubject.next(false);
      this.synchUIService.mainScollOfPageSubject.next(false);
    }

    if(percent > 2 && percent < 98) {
      this.synchUIService.mainScollOfPageSubject.next(true);
      this.synchUIService.scrolledToEndOfPageSubject.next(false);
    } 


    if(percent >= 98 && percent <= 100) {
      this.synchUIService.scrolledToEndOfPageSubject.next(true);
      this.synchUIService.mainScollOfPageSubject.next(false);
    }

   
    // console.log(percent)
  }



} //########################################################################################################################################################
// ##########################################################################################################################################################

