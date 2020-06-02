import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment }  from 'src/environments/environment'
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

// ##########################################################################################################################################################
export class AjaxService {  //##############################################################################################################################

  searchQuery_ : string = "church" 

  searchResultSubject = new Subject<any>();

  constructor(private http : HttpClient) { }


  searchVideo(searchQuery?) {
    // console.log('we are searching now')
    return this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=" + searchQuery + "&type=video&key=" + environment.YoutubeAPIKey);
  }


  searchLyrics(searchQuery) {
    return this.http.get("https://canarado-lyrics.p.rapidapi.com/lyrics/" + searchQuery , {
      headers: {
        "x-rapidapi-host": "canarado-lyrics.p.rapidapi.com",
        "x-rapidapi-key": "e46ba7e7e6mshb3209551624b62ep1f0160jsnca04aa702c0a"
      }
    })
 
  }


  // #####################################################################################################################################################
}  //####################################################################################################################################################









