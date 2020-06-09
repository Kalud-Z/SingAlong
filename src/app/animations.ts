import { trigger, transition, group, query, style, animate, stagger } from '@angular/animations';


export const lyricsFullScreenTrigger = trigger('lyricsFullScreenState', [
    transition('default => fullScreen' , [
        group([
            query('app-youtube' , [
                animate('.2s' , style({
                    transform : 'scale(0.9)'
                })),
                animate('0.2s')
            ] , { optional: true }), //query

            // query('app-lyrics' , [
            //     // animate('2s' , style({
            //     //     'align-self': 'flex-end',
            //     //     width : '46vw !important'
            //     // })),
            //     style({
            //         'align-self': 'flex-end',
            //         width : '46vw !important'
            //     }),
            //     // animate('.1s' , style({
            //     //     transform : 'scaleX(0.5)'
            //     // })),
            //     animate(2000 , style({
            //         'align-self': 'center',
            //         width : '95vw !important'
            //     }))
            //     // animate('2s')
            // ] , { optional: true }), //query
        ])
        
      ]), //transition
])




export const exitLogoTrigger = trigger('exitLogoState', [
    transition(':enter' , [
        style({
            opacity: 0
        }),
        animate('0.2s 2s')
      ]), //transition
])



export const displayVideoSuggestionsTrigger = trigger('displayVideoSuggestionsState' , [
    transition(':enter' , [
        query('.videosSuggestions__suggestion' , [
            style({ opacity : 0  }),
            stagger('120ms' , animate('.12s' , style({ opacity : 1 })))
        ] , { optional : true }), 
  
    ]),  //enter


    transition(':leave' , [
        query('.videosSuggestions__suggestion' , animate('.2s' , style({
            opacity : 0,
            transform : 'translateX(-300%)'
        })) , { optional : true })
      
    ]),  //leave    


])



export const displayLyricsSuggestionsTrigger = trigger('displayLyricsSuggestionsState' , [
    transition(':enter' , [
        query('.lyricsSuggestions__suggestion' , [
            style({ opacity : 0  }),
            stagger('120ms' , animate('.12s' , style({ opacity : 1 })))
        ] , { optional : true }), 
  
    ]),  //enter

    transition(':leave' , [
        query('.lyricsSuggestions__suggestion' , [
            stagger('120ms' , animate('2.12s ease-in' , style({ 
                opacity : 0,
                transform : 'translateX(200%)'
            })))
        ] , { optional : true }), 

    ]),  //leave    
])





export const displayChosenLyricTrigger = trigger('displayChosenLyricState' , [
  transition(':enter' , [
      style({
          opacity : 0,
          transform : 'translateY(50%)'
      }),
      animate('5.5s  ease-out' , style({
        opacity : 1,
        transform : 'translateY(0%)'
      }))

    
        // query('.changeFontSizeWrapper' , [
        //     style({
        //         opacity : 0,
        //         transform : 'translateY(300%)'
        //     }),
        //     animate('8.5s  ease-out' , style({
        //         opacity : 1,
        //         transform : 'translateY(0%)'
        //     }))
        // ] , { optional : true }),
    
        // query('.lyric-container' , [
        //     style({
        //         opacity : 0,
        //         transform : 'translateY(50%)'
        //     }),
        //     animate('5.5s  ease-out' , style({
        //         opacity : 1,
        //         transform : 'translateY(0%)'
        //     }))
        // ] , { optional : true })
    
  ]) //enter
])









