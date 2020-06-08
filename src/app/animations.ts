import { trigger, transition, group, query, style, animate } from '@angular/animations';


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

