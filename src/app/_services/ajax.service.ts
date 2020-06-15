import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment }  from 'src/environments/environment'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


// ##########################################################################################################################################################
export class AjaxService {  //##############################################################################################################################
  constructor(private http : HttpClient) { }

 
   /**
   * This method reaches out to the Youtube Data API to fetch the videos.
   * @param searchQuery 
   * @returns - it returns an observable that yields an array of objects. (each object contains alot of info about a video).
   *  - We subscribe to this observable from the dataService.
   */
  fetchVideo(searchQuery : string): Observable<any> {
    return this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=" + searchQuery
                          + "&type=video&key=" + environment.YoutubeAPIKey);
  }


  /**
   * This method reaches out to the canarado API to fetch the lyrics.
   * @param searchQuery
   * * @returns - it returns an observable that yields an array of objects. (each object contains alot of info about a lyric).
   *  - We subscribe to this observable from the dataService.
   */
  fetchLyrics(searchQuery : string): Observable<any> {
    return this.http.get("https://canarado-lyrics.p.rapidapi.com/lyrics/" + searchQuery , {
      headers: {
        "x-rapidapi-host": "canarado-lyrics.p.rapidapi.com",
        "x-rapidapi-key": "e46ba7e7e6mshb3209551624b62ep1f0160jsnca04aa702c0a"
      }
    })
 
  }

  


  // #####################################################################################################################################################
}  //####################################################################################################################################################









//   WAITING FOR SOUNDCLOUD TO REACTIVATE ITS API #####



// searchSoundCloudTracks() {
//   this.http.get('https://api.soundcloud.com/tracks/?client_id=' + this.clientID + '&q=' + this.sq).subscribe(data => {
//     // this.http.get('https://api.soundcloud.com/tracks/search' + '&q=' + this.sq).subscribe(data => {
//     console.log('###############################')
//   console.log(data);
//   })    
// }




