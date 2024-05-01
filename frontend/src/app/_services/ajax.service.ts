import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment }  from 'src/environments/environment'
import { Observable } from 'rxjs';
import { Lyric } from '../lyrics/lyrics.model';

@Injectable({
  providedIn: 'root'
})

export class AjaxService {
  constructor(private http : HttpClient) { }

  fetchVideoFromYouTubeAPI(searchQuery : string): Observable<any> {
    return this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=" + searchQuery + "&type=video&key=" + environment.YoutubeAPIKey);
  }

  searchForLyricsFromGeniusAPI(searchQuery : string): Observable<any> {
    return this.http.get("https://genius-song-lyrics1.p.rapidapi.com/search/?q=" + searchQuery , {
      headers: {
        'X-RapidAPI-Key': '2332262337mshc315559c61f6a55p17d7c5jsn5e3e4345aa2c',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    });
  }

  scrapeLyricFromGeniusAPI(lyricsObj: Lyric) {
    return this.http.get(`${environment.backendUrl}/genius${lyricsObj.lyricPath}`).toPromise()
  }

}







