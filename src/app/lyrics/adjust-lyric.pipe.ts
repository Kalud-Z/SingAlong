import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adjustLyric'
})

// ##########################################################################################################################################################
export class AdjustLyricPipe implements PipeTransform { //###################################################################################################

  transform(text : string) {
    // console.log('xxxxxxxxxxxxxxxxxxxx')
    // console.log('xxxxxxxxxxxxxxxxxxxx')

    let lyricArray = text.split(" ");

    for(var i = 0 ; i < lyricArray.length ; i++) {
      if((this.isUpperCase(lyricArray[i]) &&  !this.isUpperCase(lyricArray[i+1]) && lyricArray[i][lyricArray[i].length] !== ']')
        ||  lyricArray[i][0] === '['  ) {
        lyricArray.splice(i, 0, '<br>');
        i = i + 1;
      }
    }

    let finalText = lyricArray.join(" ");

    // console.log(finalText);

    // return text;
    return finalText;
  }




  isUpperCase(word: string) {
    let regexp = /^[A-Z]/;
    if (regexp.test(word)) { return true } 
    else { return false }
  }


  // ######################################################################################################################################################
} //####################################################################################################################################################
