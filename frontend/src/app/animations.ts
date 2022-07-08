import { trigger, transition, group, query, style, animate, stagger } from '@angular/animations';



// Video Stuff ###########################################################################################

export const closeVideoIconTrigger = trigger('closeVideoIconState', [
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
        animate('1s 0.5s ease-in' , style({
            transform : 'translateX(-300%)',
            opacity : 0
        }))

    ]),  //leave    

])



export const iframeOuterContainerTrigger = trigger('iframeOuterContainerState' , [
    transition('hidden => shown' , [
       style({
           opacity : 0
       }),
       animate('.3s 1.5s ease-out' , style({
           opacity : 1
       }))
    ]),  //enter
]);





// Lyrics stuff ##########################################################################################

export const displayLyricsSuggestionsTrigger = trigger('displayLyricsSuggestionsState' , [
    transition(':enter' , [
        query('.lyricsSuggestion' , [
            style({ opacity : 0  }),
            stagger('120ms' , animate('.12s' , style({ opacity : 1 })))
        ] , { optional : true }), 
  
    ]),  //enter

    transition(':leave' , [
        animate('1s 0.5s ease-in' , style({
            transform : 'translateX(300%)',
            opacity : 0
        }))

    ]),  //leave    
])


export const displayChosenLyricTrigger = trigger('displayChosenLyricState' , [
  transition(':enter' , [
      style({
          opacity : 0,
          transform : 'translateY(50%)'
      }),
      animate('2s 1.6s ease-out' , style({
        opacity : 1,
        transform : 'translateY(0%)'
      }))    
  ]) //enter
])


export const lyricsFullScreenTrigger = trigger('lyricsFullScreenState', [
    transition('default => fullScreen' , [
        group([
            query('app-youtube' , [
                animate('.2s' , style({
                    transform : 'scale(0.9)'
                })),
                animate('0.2s')
            ] , { optional: true }), //query
        ])
        
      ]), //transition
])



export const displayEnlargeIconTrigger = trigger('displayEnlargeIconState' , [
    transition(':enter' , [
        style({
            opacity : 0,
        }),
        animate('2s 1.6s ease-out' , style({
          opacity : 1,
        }))
    ]) //enter
  ])
  

