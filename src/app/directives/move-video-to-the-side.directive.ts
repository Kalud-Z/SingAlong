import { Directive, ElementRef, Renderer2, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMoveVideoToTheSide]'
})

// ############################################################################################################################################################
export class MoveVideoToTheSideDirective implements OnInit { //##############################################################################################################

  
  constructor(private el : ElementRef , private renderer : Renderer2) { }

  placeVideoOnTheSide = false;

  video = this.el.nativeElement;

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  scroll() {
    var container = document.querySelector('.container');
    // var position = container.scrollTop;
    var position = container.scrollTop;
    // console.log(position)
    if(position > 400) {
      this.placeVideoOnTheSide = true;
      // this.renderer.addClass(this.video, 'app-youtube-onTheSide');
    } else {
      this.placeVideoOnTheSide = false;
      // this.renderer.removeClass(this.video, 'app-youtube-onTheSide');
    }
  }

  ngDoCheck() {
    console.log('we are checking now')
    if(this.placeVideoOnTheSide) {
    const parent1 = this.renderer.parentNode(this.video);
      this.renderer.setStyle(parent1, 'border', '7px dashed yellow !important');
      // this.renderer.addClass(this.video, 'app-youtube-onTheSide');
    } else {
      // this.renderer.removeClass(this.video, 'app-youtube-onTheSide');
    }
  }

  



  // ########################################################################################################################################################
}  //#######################################################################################################################################################
