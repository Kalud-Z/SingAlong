import { Directive, ElementRef, Renderer2, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAdjustPlayerSize]'
})
// ################################################################################################################################################
export class AdjustPlayerSizeDirective implements OnInit { //#########################################################################################################
  
  // constructor(private player : ElementRef , private renderer : Renderer2) { }
  constructor(private playerWrapperRef : ElementRef , private renderer : Renderer2) { }

  @Output() calculatedWidth = new EventEmitter<number>();


  ngOnInit(){
    // const playerElement  = this.player.nativeElement;
    // const parent = this.renderer.parentNode(playerElement);
    // const parentWidth  = parent.clientWidth;
    // console.log('this is parent width : ' , parentWidth)

    // // const playerWidth = (90 *  parentWidth) / 100;
    // const playerWidth = (100 *  parentWidth) / 100;

    // this.calculatedWidth.emit(playerWidth);


    // #5%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    const playerWrapper = this.playerWrapperRef.nativeElement;
    const playerWrapperWidth =   playerWrapper.clientWidth;

    const playerWidth = (100 *  playerWrapperWidth) / 100;
    this.calculatedWidth.emit(playerWidth);
  }




}  //####################################################################################################################################################
// ###################################################################################################################################################
