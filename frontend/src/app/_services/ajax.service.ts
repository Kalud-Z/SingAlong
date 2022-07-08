import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment }  from 'src/environments/environment'
import { Observable } from 'rxjs';
import { Lyric } from '../lyrics/lyrics.model';


@Injectable({
  providedIn: 'root'
})

export class AjaxService {  //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
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


  searchForLyrics(searchQuery : string): Observable<any> {
    return this.http.get("https://genius.p.rapidapi.com/search?q=" + searchQuery , {
      headers: {
        'x-rapidapi-host': 'genius.p.rapidapi.com',
        'x-rapidapi-key': 'e46ba7e7e6mshb3209551624b62ep1f0160jsnca04aa702c0a'
      }
    });
  }


  scrapeLyricFromGenius(lyricsObj: Lyric) {
    return this.http.get(`${environment.backendUrl}/genius${lyricsObj.lyricPath}`).toPromise()
  }



} //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°









//   WAITING FOR SOUNDCLOUD TO REACTIVATE ITS API #####



// searchSoundCloudTracks() {
//   this.http.get('https://api.soundcloud.com/tracks/?client_id=' + this.clientID + '&q=' + this.sq).subscribe(data => {
//     // this.http.get('https://api.soundcloud.com/tracks/search' + '&q=' + this.sq).subscribe(data => {
//     console.log('###############################')
//   console.log(data);
//   })    
// }












//   {
//   "song": {
//   "annotation_count": 11,
//       "api_path": "/songs/74998",
//       "apple_music_id": "590423552",
//       "apple_music_player_url": "https://genius.com/songs/74998/apple_music_player",
//       "description": {
//     "dom": {
//       "tag": "root",
//           "children": [
//         {
//           "tag": "p",
//           "children": [
//             "“Numb” is the third single and the final track of ",
//             {
//               "tag": "a",
//               "attributes": {
//                 "href": "https://genius.com/artists/Linkin-park",
//                 "rel": "noopener"
//               },
//               "data": {
//                 "api_path": "/artists/1581"
//               },
//               "children": [
//                 "Linkin Park"
//               ]
//             },
//             "’s second studio album, ",
//             {
//               "tag": "em",
//               "children": [
//                 {
//                   "tag": "a",
//                   "attributes": {
//                     "href": "https://genius.com/albums/Linkin-park/Meteora",
//                     "rel": "noopener"
//                   },
//                   "data": {
//                     "api_path": "/albums/5986"
//                   },
//                   "children": [
//                     "Meteora"
//                   ]
//                 }
//               ]
//             },
//             "."
//           ]
//         },
//         "",
//         {
//           "tag": "p",
//           "children": [
//             "One of Linkin Park’s most well known and critically acclaimed songs, “Numb” topped the Billboard Hot Modern Rock Tracks chart for 12 weeks. The song spent six weeks at the top of the chart in 2003 and six weeks in 2004, making it the only song in history to be the most successful song of the year on the Hot Modern Rock Tracks chart for two years. The song also spent three weeks atop the Billboard Hot Mainstream Rock Tracks chart and peaked at #11 on the Billboard Hot 100."
//           ]
//         },
//         "",
//         {
//           "tag": "p",
//           "children": [
//             "The song was later combined with Jay-Z’s song ",
//             {
//               "tag": "a",
//               "attributes": {
//                 "href": "https://genius.com/Jay-z-encore-lyrics",
//                 "rel": "noopener"
//               },
//               "data": {
//                 "api_path": "/songs/816"
//               },
//               "children": [
//                 "“Encore”"
//               ]
//             },
//             " to create “Numb/Encore”, a massive hit for both artists which was featured on the album Collision Course and earned them the Grammy Award for Best Rap/Sung Collaboration. “Numb” was ranked #95 on Rhapsody’s list of the Top 100 Tracks of the Decade."
//           ]
//         },
//         "",
//         {
//           "tag": "p",
//           "children": [
//             "On November 8, 2018, the music video on YouTube reached 1B views and is the first Linkin Park music video to reach 1B views."
//           ]
//         },
//         "",
//         {
//           "tag": "p",
//           "children": [
//             {
//               "tag": "small",
//               "children": [
//                 "(",
//                 {
//                   "tag": "em",
//                   "children": [
//                     {
//                       "tag": "a",
//                       "attributes": {
//                         "href": "http://en.wikipedia.org/wiki/Numb_%28Linkin_Park_song%29",
//                         "rel": "noopener nofollow"
//                       },
//                       "children": [
//                         "Source"
//                       ]
//                     }
//                   ]
//                 },
//                 ")"
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   },
//   "embed_content": "<div id='rg_embed_link_74998' class='rg_embed_link' data-song-id='74998'>Read <a href='https://genius.com/Linkin-park-numb-lyrics'>“Numb” by Linkin Park</a> on Genius</div> <script crossorigin src='//genius.com/songs/74998/embed.js'></script>",
//       "fact_track": {
//     "provider": "spotify",
//         "external_url": "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h",
//         "button_text": "Behind the Lyrics in Spotify",
//         "help_link_text": "What's a Fact Track?",
//         "help_link_url": "https://genius.com/a/genius-and-spotify-together"
//   },
//   "featured_video": true,
//       "full_title": "Numb by Linkin Park",
//       "header_image_thumbnail_url": "https://images.genius.com/fe104a811126443667345c1fe51d5dad.300x300x1.jpg",
//       "header_image_url": "https://images.genius.com/fe104a811126443667345c1fe51d5dad.1000x1000x1.jpg",
//       "id": 74998,
//       "lyrics_owner_id": 85947,
//       "lyrics_placeholder_reason": null,
//       "lyrics_state": "complete",
//       "path": "/Linkin-park-numb-lyrics",
//       "pyongs_count": 184,
//       "recording_location": "NRG Recording Studios, North Hollywood, CA",
//       "release_date": "2003-03-24",
//       "release_date_for_display": "March 24, 2003",
//       "song_art_image_thumbnail_url": "https://images.genius.com/1f62b0db3c3a03d1577f221289532da4.300x300x1.png",
//       "song_art_image_url": "https://images.genius.com/1f62b0db3c3a03d1577f221289532da4.1000x1000x1.png",
//       "stats": {
//     "accepted_annotations": 10,
//         "contributors": 209,
//         "iq_earners": 209,
//         "transcribers": 4,
//         "unreviewed_annotations": 0,
//         "verified_annotations": 0,
//         "hot": false,
//         "pageviews": 1019633
//   },
//   "title": "Numb",
//       "title_with_featured": "Numb",
//       "url": "https://genius.com/Linkin-park-numb-lyrics",
//       "current_user_metadata": {
//     "permissions": [
//       "follow",
//       "see_pageviews",
//       "pyong",
//       "add_community_annotation_to",
//       "watch_fact_track",
//       "view_apple_music_player",
//       "create_comment",
//       "create_annotation",
//       "view_song_story_gallery",
//       "propose_lyrics_edit"
//     ],
//         "excluded_permissions": [
//       "award_transcription_iq",
//       "remove_transcription_iq",
//       "edit_lyrics",
//       "view_annotation_engagement_data",
//       "publish",
//       "unpublish",
//       "edit_spotify_details",
//       "hide",
//       "unhide",
//       "toggle_featured_video",
//       "add_pinned_annotation_to",
//       "destroy",
//       "mark_as_not_spam",
//       "edit_spotify_annotations_for",
//       "verify_lyrics",
//       "unverify_lyrics",
//       "edit_anything",
//       "edit_any_media",
//       "edit",
//       "rename",
//       "edit_tags",
//       "reindex",
//       "view_lyrics_synchronization",
//       "enable_media",
//       "disable_media",
//       "edit_lyrics_or_annotation_brackets",
//       "see_editorial_indicators",
//       "view_attribution_visualization",
//       "edit_annotation_brackets",
//       "preview_lyrics_for_export",
//       "hide_apple_player",
//       "unhide_apple_player",
//       "trigger_apple_match",
//       "mark_lyrics_evaluation_as_approved",
//       "mark_lyrics_evaluation_as_staff_approved",
//       "mark_lyrics_evaluation_as_unapproved",
//       "mark_lyrics_evaluation_as_un_staff_approved",
//       "view_transcriber_media_player",
//       "override_apple_match",
//       "set_song_color_gradient",
//       "edit_youtube_url",
//       "edit_soundcloud_url",
//       "edit_spotify_uuid",
//       "edit_vevo_url",
//       "moderate_annotations",
//       "see_short_id",
//       "manage_chart_item",
//       "create_tag",
//       "moderate_lyrics_edit_proposals",
//       "preview_react_song_page"
//     ],
//         "interactions": {
//       "pyong": false,
//           "following": false
//     },
//     "relationships": {
//       "pinned_role": null
//     },
//     "iq_by_action": {
//       "edit_metadata": {
//         "primary": {
//           "multiplier": 1,
//               "base": 2,
//               "applicable": true
//         }
//       }
//     }
//   },
//   "song_art_primary_color": "#bf3f4f",
//       "song_art_secondary_color": "#0c0405",
//       "song_art_text_color": "#fff",
//       "album": {
//     "api_path": "/albums/5986",
//         "cover_art_url": "https://images.genius.com/725dc3b4088607501ce12eb359523ff3.1000x1000x1.png",
//         "full_title": "Meteora by Linkin Park",
//         "id": 5986,
//         "name": "Meteora",
//         "url": "https://genius.com/albums/Linkin-park/Meteora",
//         "artist": {
//       "api_path": "/artists/1581",
//           "header_image_url": "https://images.genius.com/d0aa7a07a7213a80ca95d9da4a053fa0.1000x509x1.jpg",
//           "id": 1581,
//           "image_url": "https://images.genius.com/a865aac7693c39977b9b402dc364908e.1000x1000x1.jpg",
//           "is_meme_verified": false,
//           "is_verified": true,
//           "name": "Linkin Park",
//           "url": "https://genius.com/artists/Linkin-park",
//           "iq": 1743
//     }
//   },
//   "custom_performances": [
//     {
//       "label": "Mastering Engineer",
//       "artists": [
//         {
//           "api_path": "/artists/637914",
//           "header_image_url": "https://images.genius.com/9ed2a5315fe0d92d7047de8f72fc66ff.508x800x1.jpg",
//           "id": 637914,
//           "image_url": "https://images.genius.com/83484709e5b3cacf10774eb0639fcc7d.508x508x1.jpg",
//           "is_meme_verified": false,
//           "is_verified": false,
//           "name": "Brian Gardner",
//           "url": "https://genius.com/artists/Brian-gardner"
//         }
//       ]
//     },
//     {
//       "label": "Guitar",
//       "artists": [
//         {
//           "api_path": "/artists/177201",
//           "header_image_url": "https://images.genius.com/03b575fa7baad98f1ddf8e8e378f2ac2.664x1000x1.jpg",
//           "id": 177201,
//           "image_url": "https://images.genius.com/ad8ed549583846634a19fd0d83db633e.265x385x1.jpg",
//           "is_meme_verified": false,
//           "is_verified": false,
//           "name": "Brad Delson",
//           "url": "https://genius.com/artists/Brad-delson"
//         }
//       ]
//     },
//     {
//       "label": "Assistant Mixing Engineer",
//       "artists": [
//         {
//           "api_path": "/artists/643814",
//           "header_image_url": "https://images.genius.com/767dee94f844d46d6eab0928c2ac7f2f.600x600x1.jpg",
//           "id": 643814,
//           "image_url": "https://images.genius.com/767dee94f844d46d6eab0928c2ac7f2f.600x600x1.jpg",
//           "is_meme_verified": false,
//           "is_verified": false,
//           "name": "Steve Sisco",
//           "url": "https://genius.com/artists/Steve-sisco"
//         }
//       ]
//     },
//     {
//       "label": "Mixing Engineer",
//       "artists": [
//         {
//           "api_path": "/artists/38340",
//           "header_image_url": "https://images.genius.com/22f75c91ae3e72b1536e6b959cb67a6b.720x720x1.jpg",
//           "id": 38340,
//           "image_url": "https://images.genius.com/22f75c91ae3e72b1536e6b959cb67a6b.720x720x1.jpg",
//           "is_meme_verified": false,
//           "is_verified": false,
//           "name": "Andy Wallace",
//           "url": "https://genius.com/artists/Andy-wallace"
//         }
//       ]
//     },
//     {
//       "label": "Background Vocals",
//       "artists": [
//         {
//           "api_path": "/artists/4431",
//           "header_image_url": "https://images.genius.com/761ad8cffdfa72b5baf412210f466560.1000x380x1.jpg",
//           "id": 4431,
//           "image_url": "https://images.genius.com/67404e5ae6f42d091a1c373aa4c3fa97.1000x1000x1.png",
//           "is_meme_verified": false,
//           "is_verified": true,
//           "name": "Mike Shinoda",
//           "url": "https://genius.com/artists/Mike-shinoda",
//           "iq": 12062
//         }
//       ]
//     },
//     {
//       "label": "Piano",
//       "artists": [
//         {
//           "api_path": "/artists/4431",
//           "header_image_url": "https://images.genius.com/761ad8cffdfa72b5baf412210f466560.1000x380x1.jpg",
//           "id": 4431,
//           "image_url": "https://images.genius.com/67404e5ae6f42d091a1c373aa4c3fa97.1000x1000x1.png",
//           "is_meme_verified": false,
//           "is_verified": true,
//           "name": "Mike Shinoda",
//           "url": "https://genius.com/artists/Mike-shinoda",
//           "iq": 12062
//         }
//       ]
//     },
//     {
//       "label": "Label",
//       "artists": [
//         {
//           "api_path": "/artists/1112276",
//           "header_image_url": "https://images.genius.com/159917d9c26b9cfe66c0b04493a1f05a.900x900x1.png",
//           "id": 1112276,
//           "image_url": "https://images.genius.com/340e19086e9ebeae265e6e4947b0ffcb.900x900x1.png",
//           "is_meme_verified": false,
//           "is_verified": false,
//           "name": "Warner Music Group",
//           "url": "https://genius.com/artists/Warner-music-group"
//         }
//       ]
//     },
//     {
//       "label": "Emcee",
//       "artists": [
//         {
//           "api_path": "/artists/4431",
//           "header_image_url": "https://images.genius.com/761ad8cffdfa72b5baf412210f466560.1000x380x1.jpg",
//           "id": 4431,
//           "image_url": "https://images.genius.com/67404e5ae6f42d091a1c373aa4c3fa97.1000x1000x1.png",
//           "is_meme_verified": false,
//           "is_verified": true,
//           "name": "Mike Shinoda",
//           "url": "https://genius.com/artists/Mike-shinoda",
//           "iq": 12062
//         }
//       ]
//     },
//     {
//       "label": "Drums",
//       "artists": [
//         {
//           "api_path": "/artists/643808",
//           "header_image_url": "https://images.genius.com/22066072878e2d95bfc08a949455997d.1000x188x1.jpg",
//           "id": 643808,
//           "image_url": "https://images.genius.com/e94dd43f295dcd8bc56be0085cfef234.455x455x1.jpg",
//           "is_meme_verified": false,
//           "is_verified": false,
//           "name": "Rob Bourdon",
//           "url": "https://genius.com/artists/Rob-bourdon"
//         }
//       ]
//     },
//     {
//       "label": "Turntables",
//       "artists": [
//         {
//           "api_path": "/artists/271318",
//           "header_image_url": "https://images.genius.com/4734a9e0b56f985e56bafb2175f002d2.630x354x1.jpg",
//           "id": 271318,
//           "image_url": "https://images.genius.com/87da1d19cc2e2ac125aa6e81f5659418.1000x1000x1.jpg",
//           "is_meme_verified": false,
//           "is_verified": false,
//           "name": "Mr. Hahn",
//           "url": "https://genius.com/artists/Mr-hahn"
//         }
//       ]
//     },
//     {
//       "label": "Bass Guitar",
//       "artists": [
//         {
//           "api_path": "/artists/635618",
//           "header_image_url": "https://images.genius.com/44b94af7ede9ad126dfed6cca0940c5c.1000x563x1.jpg",
//           "id": 635618,
//           "image_url": "https://images.genius.com/798c8bfd9a8203bd11a71b8e51868e86.250x250x1.jpg",
//           "is_meme_verified": false,
//           "is_verified": false,
//           "name": "Dave Farrell",
//           "url": "https://genius.com/artists/Dave-farrell"
//         }
//       ]
//     },
//     {
//       "label": "Lead Vocals",
//       "artists": [
//         {
//           "api_path": "/artists/1015",
//           "header_image_url": "https://images.genius.com/b6983cfc17651601b84acec5c1b3228f.1000x303x1.jpg",
//           "id": 1015,
//           "image_url": "https://images.genius.com/3853f38429e3cd0278c2b5b6307b9e92.752x752x1.jpg",
//           "is_meme_verified": false,
//           "is_verified": true,
//           "name": "Chester Bennington",
//           "url": "https://genius.com/artists/Chester-bennington",
//           "iq": 3329
//         }
//       ]
//     },
//     {
//       "label": "Assistant Engineer",
//       "artists": [
//         {
//           "api_path": "/artists/643813",
//           "header_image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//           "id": 643813,
//           "image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//           "is_meme_verified": false,
//           "is_verified": false,
//           "name": "Fox Phelps",
//           "url": "https://genius.com/artists/Fox-phelps"
//         }
//       ]
//     },
//     {
//       "label": "Engineer",
//       "artists": [
//         {
//           "api_path": "/artists/643830",
//           "header_image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//           "id": 643830,
//           "image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//           "is_meme_verified": false,
//           "is_verified": false,
//           "name": "John Ewing, Jr",
//           "url": "https://genius.com/artists/John-ewing-jr"
//         }
//       ]
//     }
//   ],
//       "description_annotation": {
//     "_type": "referent",
//         "annotator_id": 85947,
//         "annotator_login": "BreezyMac",
//         "api_path": "/referents/3566497",
//         "classification": "accepted",
//         "fragment": "Numb",
//         "id": 3566497,
//         "is_description": true,
//         "path": "/3566497/Linkin-park-numb/Numb",
//         "range": {
//       "content": "Numb"
//     },
//     "song_id": 74998,
//         "url": "https://genius.com/3566497/Linkin-park-numb/Numb",
//         "verified_annotator_ids": [],
//         "annotatable": {
//       "api_path": "/songs/74998",
//           "client_timestamps": {
//         "updated_by_human_at": 1625188220,
//             "lyrics_updated_at": 1622902626
//       },
//       "context": "Linkin Park",
//           "id": 74998,
//           "image_url": "https://images.genius.com/1f62b0db3c3a03d1577f221289532da4.1000x1000x1.png",
//           "link_title": "Numb by Linkin Park",
//           "title": "Numb",
//           "type": "Song",
//           "url": "https://genius.com/Linkin-park-numb-lyrics"
//     },
//     "annotations": [
//       {
//         "api_path": "/annotations/3566497",
//         "body": {
//           "dom": {
//             "tag": "root",
//             "children": [
//               {
//                 "tag": "p",
//                 "children": [
//                   "“Numb” is the third single and the final track of ",
//                   {
//                     "tag": "a",
//                     "attributes": {
//                       "href": "https://genius.com/artists/Linkin-park",
//                       "rel": "noopener"
//                     },
//                     "data": {
//                       "api_path": "/artists/1581"
//                     },
//                     "children": [
//                       "Linkin Park"
//                     ]
//                   },
//                   "’s second studio album, ",
//                   {
//                     "tag": "em",
//                     "children": [
//                       {
//                         "tag": "a",
//                         "attributes": {
//                           "href": "https://genius.com/albums/Linkin-park/Meteora",
//                           "rel": "noopener"
//                         },
//                         "data": {
//                           "api_path": "/albums/5986"
//                         },
//                         "children": [
//                           "Meteora"
//                         ]
//                       }
//                     ]
//                   },
//                   "."
//                 ]
//               },
//               "",
//               {
//                 "tag": "p",
//                 "children": [
//                   "One of Linkin Park’s most well known and critically acclaimed songs, “Numb” topped the Billboard Hot Modern Rock Tracks chart for 12 weeks. The song spent six weeks at the top of the chart in 2003 and six weeks in 2004, making it the only song in history to be the most successful song of the year on the Hot Modern Rock Tracks chart for two years. The song also spent three weeks atop the Billboard Hot Mainstream Rock Tracks chart and peaked at #11 on the Billboard Hot 100."
//                 ]
//               },
//               "",
//               {
//                 "tag": "p",
//                 "children": [
//                   "The song was later combined with Jay-Z’s song ",
//                   {
//                     "tag": "a",
//                     "attributes": {
//                       "href": "https://genius.com/Jay-z-encore-lyrics",
//                       "rel": "noopener"
//                     },
//                     "data": {
//                       "api_path": "/songs/816"
//                     },
//                     "children": [
//                       "“Encore”"
//                     ]
//                   },
//                   " to create “Numb/Encore”, a massive hit for both artists which was featured on the album Collision Course and earned them the Grammy Award for Best Rap/Sung Collaboration. “Numb” was ranked #95 on Rhapsody’s list of the Top 100 Tracks of the Decade."
//                 ]
//               },
//               "",
//               {
//                 "tag": "p",
//                 "children": [
//                   "On November 8, 2018, the music video on YouTube reached 1B views and is the first Linkin Park music video to reach 1B views."
//                 ]
//               },
//               "",
//               {
//                 "tag": "p",
//                 "children": [
//                   {
//                     "tag": "small",
//                     "children": [
//                       "(",
//                       {
//                         "tag": "em",
//                         "children": [
//                           {
//                             "tag": "a",
//                             "attributes": {
//                               "href": "http://en.wikipedia.org/wiki/Numb_%28Linkin_Park_song%29",
//                               "rel": "noopener nofollow"
//                             },
//                             "children": [
//                               "Source"
//                             ]
//                           }
//                         ]
//                       },
//                       ")"
//                     ]
//                   }
//                 ]
//               }
//             ]
//           }
//         },
//         "comment_count": 8,
//         "community": true,
//         "custom_preview": null,
//         "has_voters": true,
//         "id": 3566497,
//         "pinned": false,
//         "share_url": "https://genius.com/3566497",
//         "source": null,
//         "state": "accepted",
//         "url": "https://genius.com/3566497/Linkin-park-numb/Numb",
//         "verified": false,
//         "votes_total": 151,
//         "current_user_metadata": {
//           "permissions": [
//             "vote",
//             "propose_edit_to",
//             "create_comment"
//           ],
//           "excluded_permissions": [
//             "edit",
//             "cosign",
//             "uncosign",
//             "destroy",
//             "accept",
//             "reject",
//             "see_unreviewed",
//             "clear_votes",
//             "pin_to_profile",
//             "unpin_from_profile",
//             "update_source",
//             "edit_custom_preview"
//           ],
//           "interactions": {
//             "cosign": false,
//             "pyong": false,
//             "vote": null
//           },
//           "iq_by_action": {
//             "accept": {
//               "primary": {
//                 "multiplier": 1,
//                 "base": 10,
//                 "applicable": true
//               }
//             },
//             "reject": {
//               "primary": {
//                 "multiplier": 1,
//                 "base": 2,
//                 "applicable": true
//               }
//             },
//             "delete": {
//               "primary": {
//                 "multiplier": 1,
//                 "base": 5,
//                 "applicable": true
//               }
//             }
//           }
//         },
//         "authors": [
//           {
//             "attribution": 0.7936507936507937,
//             "pinned_role": null,
//             "user": {
//               "api_path": "/users/85947",
//               "avatar": {
//                 "tiny": {
//                   "url": "https://s3.amazonaws.com/rapgenius/avatars/tiny/85947_headphones.jpg",
//                   "bounding_box": {
//                     "width": 16,
//                     "height": 16
//                   }
//                 },
//                 "thumb": {
//                   "url": "https://s3.amazonaws.com/rapgenius/avatars/thumb/1358289275_85947_headphones.jpg",
//                   "bounding_box": {
//                     "width": 32,
//                     "height": 32
//                   }
//                 },
//                 "small": {
//                   "url": "https://s3.amazonaws.com/rapgenius/avatars/small/1358289276_85947_headphones.jpg",
//                   "bounding_box": {
//                     "width": 100,
//                     "height": 100
//                   }
//                 },
//                 "medium": {
//                   "url": "https://s3.amazonaws.com/rapgenius/avatars/medium/1358289275_85947_headphones.jpg",
//                   "bounding_box": {
//                     "width": 300,
//                     "height": 400
//                   }
//                 }
//               },
//               "header_image_url": "https://s3.amazonaws.com/rapgenius/avatars/medium/1358289275_85947_headphones.jpg",
//               "human_readable_role_for_display": "Contributor",
//               "id": 85947,
//               "iq": 2113,
//               "login": "BreezyMac",
//               "name": "BreezyMac",
//               "role_for_display": "contributor",
//               "url": "https://genius.com/BreezyMac",
//               "current_user_metadata": {
//                 "permissions": [
//                   "follow"
//                 ],
//                 "excluded_permissions": [],
//                 "interactions": {
//                   "following": false
//                 }
//               }
//             }
//           },
//           {
//             "attribution": 0.12169312169312169,
//             "pinned_role": null,
//             "user": {
//               "api_path": "/users/6178488",
//               "avatar": {
//                 "tiny": {
//                   "url": "https://images.genius.com/avatars/tiny/ceeee5237b62001da40c7bfe374ffcf9",
//                   "bounding_box": {
//                     "width": 16,
//                     "height": 16
//                   }
//                 },
//                 "thumb": {
//                   "url": "https://images.genius.com/avatars/thumb/ceeee5237b62001da40c7bfe374ffcf9",
//                   "bounding_box": {
//                     "width": 32,
//                     "height": 32
//                   }
//                 },
//                 "small": {
//                   "url": "https://images.genius.com/avatars/small/ceeee5237b62001da40c7bfe374ffcf9",
//                   "bounding_box": {
//                     "width": 100,
//                     "height": 100
//                   }
//                 },
//                 "medium": {
//                   "url": "https://images.genius.com/avatars/medium/ceeee5237b62001da40c7bfe374ffcf9",
//                   "bounding_box": {
//                     "width": 300,
//                     "height": 400
//                   }
//                 }
//               },
//               "header_image_url": "https://images.genius.com/avatars/medium/ceeee5237b62001da40c7bfe374ffcf9",
//               "human_readable_role_for_display": null,
//               "id": 6178488,
//               "iq": 127,
//               "login": "Michaeliosgamer5",
//               "name": "Michaeliosgamer5",
//               "role_for_display": null,
//               "url": "https://genius.com/Michaeliosgamer5",
//               "current_user_metadata": {
//                 "permissions": [
//                   "follow"
//                 ],
//                 "excluded_permissions": [],
//                 "interactions": {
//                   "following": false
//                 }
//               }
//             }
//           },
//           {
//             "attribution": 0.052910052910052914,
//             "pinned_role": null,
//             "user": {
//               "api_path": "/users/8534",
//               "avatar": {
//                 "tiny": {
//                   "url": "https://images.genius.com/avatars/tiny/d662e609f7d8c03fae7781bed7834f58",
//                   "bounding_box": {
//                     "width": 16,
//                     "height": 16
//                   }
//                 },
//                 "thumb": {
//                   "url": "https://images.genius.com/avatars/thumb/d662e609f7d8c03fae7781bed7834f58",
//                   "bounding_box": {
//                     "width": 32,
//                     "height": 32
//                   }
//                 },
//                 "small": {
//                   "url": "https://images.genius.com/avatars/small/d662e609f7d8c03fae7781bed7834f58",
//                   "bounding_box": {
//                     "width": 100,
//                     "height": 100
//                   }
//                 },
//                 "medium": {
//                   "url": "https://images.genius.com/avatars/medium/d662e609f7d8c03fae7781bed7834f58",
//                   "bounding_box": {
//                     "width": 300,
//                     "height": 400
//                   }
//                 }
//               },
//               "header_image_url": "https://images.genius.com/82c5966f5fefe7dc9d58df6e709eba45.570x144x1.jpg",
//               "human_readable_role_for_display": "Contributor",
//               "id": 8534,
//               "iq": 360326,
//               "login": "Ezzo",
//               "name": "Romi Ezzo",
//               "role_for_display": "contributor",
//               "url": "https://genius.com/Ezzo",
//               "current_user_metadata": {
//                 "permissions": [
//                   "follow"
//                 ],
//                 "excluded_permissions": [],
//                 "interactions": {
//                   "following": false
//                 }
//               }
//             }
//           },
//           {
//             "attribution": 0.031746031746031744,
//             "pinned_role": null,
//             "user": {
//               "api_path": "/users/11792079",
//               "avatar": {
//                 "tiny": {
//                   "url": "https://images.genius.com/avatars/tiny/046dcdde39b0bc100e7b4b4ae3ea4e70",
//                   "bounding_box": {
//                     "width": 16,
//                     "height": 16
//                   }
//                 },
//                 "thumb": {
//                   "url": "https://images.genius.com/avatars/thumb/046dcdde39b0bc100e7b4b4ae3ea4e70",
//                   "bounding_box": {
//                     "width": 32,
//                     "height": 32
//                   }
//                 },
//                 "small": {
//                   "url": "https://images.genius.com/avatars/small/046dcdde39b0bc100e7b4b4ae3ea4e70",
//                   "bounding_box": {
//                     "width": 100,
//                     "height": 100
//                   }
//                 },
//                 "medium": {
//                   "url": "https://images.genius.com/avatars/medium/046dcdde39b0bc100e7b4b4ae3ea4e70",
//                   "bounding_box": {
//                     "width": 300,
//                     "height": 400
//                   }
//                 }
//               },
//               "header_image_url": "https://images.genius.com/avatars/medium/046dcdde39b0bc100e7b4b4ae3ea4e70",
//               "human_readable_role_for_display": null,
//               "id": 11792079,
//               "iq": 115,
//               "login": "BakedNConfused",
//               "name": "BakedNConfused",
//               "role_for_display": null,
//               "url": "https://genius.com/BakedNConfused",
//               "current_user_metadata": {
//                 "permissions": [
//                   "follow"
//                 ],
//                 "excluded_permissions": [],
//                 "interactions": {
//                   "following": false
//                 }
//               }
//             }
//           }
//         ],
//         "cosigned_by": [],
//         "rejection_comment": null,
//         "verified_by": null
//       }
//     ]
//   },
//   "featured_artists": [],
//       "lyrics_marked_complete_by": {
//     "api_path": "/users/6578",
//         "avatar": {
//       "tiny": {
//         "url": "https://images.genius.com/avatars/tiny/98cf930deeb0fc2d97563bbb1a4a32a3",
//             "bounding_box": {
//           "width": 16,
//               "height": 16
//         }
//       },
//       "thumb": {
//         "url": "https://images.genius.com/avatars/thumb/98cf930deeb0fc2d97563bbb1a4a32a3",
//             "bounding_box": {
//           "width": 32,
//               "height": 32
//         }
//       },
//       "small": {
//         "url": "https://images.genius.com/avatars/small/98cf930deeb0fc2d97563bbb1a4a32a3",
//             "bounding_box": {
//           "width": 100,
//               "height": 100
//         }
//       },
//       "medium": {
//         "url": "https://images.genius.com/avatars/medium/98cf930deeb0fc2d97563bbb1a4a32a3",
//             "bounding_box": {
//           "width": 300,
//               "height": 400
//         }
//       }
//     },
//     "header_image_url": "https://images.genius.com/72d9e4d63bda9c158ebdd0852e9a68f8.320x240x475.gif",
//         "human_readable_role_for_display": "Staff",
//         "id": 6578,
//         "iq": 819511,
//         "login": "louiedro",
//         "name": "​louiedro",
//         "role_for_display": "staff",
//         "url": "https://genius.com/louiedro",
//         "current_user_metadata": {
//       "permissions": [
//         "follow"
//       ],
//           "excluded_permissions": [],
//           "interactions": {
//         "following": false
//       }
//     }
//   },
//   "media": [
//     {
//       "provider": "youtube",
//       "start": 0,
//       "type": "video",
//       "url": "http://www.youtube.com/watch?v=kXYiU_JCYtU"
//     },
//     {
//       "native_uri": "spotify:track:2nLtzopw4rPReszdYBJU6h",
//       "provider": "spotify",
//       "type": "audio",
//       "url": "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h"
//     },
//     {
//       "attribution": "linkin_park",
//       "provider": "soundcloud",
//       "type": "audio",
//       "url": "https://soundcloud.com/linkin_park/numb"
//     }
//   ],
//       "primary_artist": {
//     "api_path": "/artists/1581",
//         "header_image_url": "https://images.genius.com/d0aa7a07a7213a80ca95d9da4a053fa0.1000x509x1.jpg",
//         "id": 1581,
//         "image_url": "https://images.genius.com/a865aac7693c39977b9b402dc364908e.1000x1000x1.jpg",
//         "is_meme_verified": false,
//         "is_verified": true,
//         "name": "Linkin Park",
//         "url": "https://genius.com/artists/Linkin-park",
//         "iq": 1743
//   },
//   "producer_artists": [
//     {
//       "api_path": "/artists/1581",
//       "header_image_url": "https://images.genius.com/d0aa7a07a7213a80ca95d9da4a053fa0.1000x509x1.jpg",
//       "id": 1581,
//       "image_url": "https://images.genius.com/a865aac7693c39977b9b402dc364908e.1000x1000x1.jpg",
//       "is_meme_verified": false,
//       "is_verified": true,
//       "name": "Linkin Park",
//       "url": "https://genius.com/artists/Linkin-park",
//       "iq": 1743
//     },
//     {
//       "api_path": "/artists/44539",
//       "header_image_url": "https://images.genius.com/1f9d0d743a83d3f720c78be84798e7b9.1000x1000x1.png",
//       "id": 44539,
//       "image_url": "https://images.genius.com/dfb2a9193118fa85a13a2beb18d96c7e.268x268x1.jpg",
//       "is_meme_verified": false,
//       "is_verified": false,
//       "name": "Don Gilmore",
//       "url": "https://genius.com/artists/Don-gilmore"
//     }
//   ],
//       "song_relationships": [
//     {
//       "relationship_type": "samples",
//       "type": "samples",
//       "songs": []
//     },
//     {
//       "relationship_type": "sampled_in",
//       "type": "sampled_in",
//       "songs": [
//         {
//           "annotation_count": 6,
//           "api_path": "/songs/58807",
//           "full_title": "Encore '07 by Nicki Minaj",
//           "header_image_thumbnail_url": "https://images.genius.com/b256017f3b831150266cf5131d761bfe.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/b256017f3b831150266cf5131d761bfe.600x599x1.jpg",
//           "id": 58807,
//           "lyrics_owner_id": 42164,
//           "lyrics_state": "complete",
//           "path": "/Nicki-minaj-encore-07-lyrics",
//           "pyongs_count": 5,
//           "song_art_image_thumbnail_url": "https://images.genius.com/b256017f3b831150266cf5131d761bfe.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/b256017f3b831150266cf5131d761bfe.600x599x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 2,
//             "hot": false,
//             "pageviews": 14850
//           },
//           "title": "Encore ’07",
//           "title_with_featured": "Encore '07",
//           "url": "https://genius.com/Nicki-minaj-encore-07-lyrics",
//           "song_art_primary_color": "#e93b7c",
//           "song_art_secondary_color": "#761c3c",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/92",
//             "header_image_url": "https://images.genius.com/ab2a85c825e8e602ff228a210a218473.913x498x1.png",
//             "id": 92,
//             "image_url": "https://images.genius.com/8ae5a5e5e030cb67814165bd038af48f.1000x1000x1.jpg",
//             "is_meme_verified": true,
//             "is_verified": true,
//             "name": "Nicki Minaj",
//             "url": "https://genius.com/artists/Nicki-minaj",
//             "iq": 3533
//           }
//         },
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/3220175",
//           "full_title": "Pokémon Go (atrapalos ya) (parodia) by Tongo",
//           "header_image_thumbnail_url": "https://images.genius.com/2a29af82e14ff575466e543f7b556f7f.246x138x1.jpg",
//           "header_image_url": "https://images.genius.com/2a29af82e14ff575466e543f7b556f7f.246x138x1.jpg",
//           "id": 3220175,
//           "lyrics_owner_id": 4118964,
//           "lyrics_state": "complete",
//           "path": "/Tongo-pokemon-go-atrapalos-ya-parodia-annotated",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/2a29af82e14ff575466e543f7b556f7f.246x138x1.jpg",
//           "song_art_image_url": "https://images.genius.com/2a29af82e14ff575466e543f7b556f7f.246x138x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 1,
//             "hot": false
//           },
//           "title": "Pokémon Go (atrapalos ya) (parodia)",
//           "title_with_featured": "Pokémon Go (atrapalos ya) (parodia)",
//           "url": "https://genius.com/Tongo-pokemon-go-atrapalos-ya-parodia-annotated",
//           "song_art_primary_color": "#dbe317",
//           "song_art_secondary_color": "#edd58f",
//           "song_art_text_color": "#000",
//           "primary_artist": {
//             "api_path": "/artists/1158057",
//             "header_image_url": "https://images.genius.com/c1968047f2e2f45e667e4fefaf62303f.900x900x1.jpg",
//             "id": 1158057,
//             "image_url": "https://images.genius.com/c1968047f2e2f45e667e4fefaf62303f.900x900x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Tongo",
//             "url": "https://genius.com/artists/Tongo"
//           }
//         },
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/3249941",
//           "full_title": "Dusk Till Dawn (Sing Off) by Conor Maynard (Ft. Madison Beer)",
//           "header_image_thumbnail_url": "https://images.genius.com/9e9dd20b7d1abe9687693899d96b75f8.300x169x1.jpg",
//           "header_image_url": "https://images.genius.com/9e9dd20b7d1abe9687693899d96b75f8.1000x563x1.jpg",
//           "id": 3249941,
//           "lyrics_owner_id": 4909814,
//           "lyrics_state": "complete",
//           "path": "/Conor-maynard-dusk-till-dawn-sing-off-lyrics",
//           "pyongs_count": 7,
//           "song_art_image_thumbnail_url": "https://images.genius.com/17e525f3479e309be738f1c5c519d26a.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/17e525f3479e309be738f1c5c519d26a.1000x1000x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 1,
//             "hot": false,
//             "pageviews": 217832
//           },
//           "title": "Dusk Till Dawn (Sing Off)",
//           "title_with_featured": "Dusk Till Dawn (Sing Off) (Ft. Madison Beer)",
//           "url": "https://genius.com/Conor-maynard-dusk-till-dawn-sing-off-lyrics",
//           "song_art_primary_color": "#fc0404",
//           "song_art_secondary_color": "#800f05",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/21941",
//             "header_image_url": "https://images.genius.com/2d3a8a588d504ca90e4049b2d3ec9c83.1000x525x1.jpg",
//             "id": 21941,
//             "image_url": "https://images.genius.com/40800fa7d2b6fe66db71c7ad51a957fc.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": true,
//             "name": "Conor Maynard",
//             "url": "https://genius.com/artists/Conor-maynard",
//             "iq": 265
//           }
//         },
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/3255472",
//           "full_title": "You Can't Feel It All Over by JoeyVFX",
//           "header_image_thumbnail_url": "https://images.genius.com/1230e637b94c2c8b45db8eba3833519b.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/1230e637b94c2c8b45db8eba3833519b.1000x1000x1.jpg",
//           "id": 3255472,
//           "lyrics_owner_id": 5010390,
//           "lyrics_state": "complete",
//           "path": "/Joeyvfx-you-cant-feel-it-all-over-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/1230e637b94c2c8b45db8eba3833519b.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/1230e637b94c2c8b45db8eba3833519b.1000x1000x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 1,
//             "hot": false
//           },
//           "title": "You Can’t Feel It All Over",
//           "title_with_featured": "You Can't Feel It All Over",
//           "url": "https://genius.com/Joeyvfx-you-cant-feel-it-all-over-lyrics",
//           "song_art_primary_color": "#ec2a0e",
//           "song_art_secondary_color": "#792418",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1229014",
//             "header_image_url": "https://images.genius.com/e0accbda995f6740cc5e61aa21fbf239.400x400x1.jpg",
//             "id": 1229014,
//             "image_url": "https://images.genius.com/e0accbda995f6740cc5e61aa21fbf239.400x400x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "JoeyVFX",
//             "url": "https://genius.com/artists/Joeyvfx"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/3315031",
//           "full_title": "The Norm by Uppermost",
//           "header_image_thumbnail_url": "https://images.genius.com/783ac976c66a8a1e2bca21db31965a38.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/783ac976c66a8a1e2bca21db31965a38.500x500x1.jpg",
//           "id": 3315031,
//           "lyrics_owner_id": 5454212,
//           "lyrics_state": "complete",
//           "path": "/Uppermost-the-norm-annotated",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/783ac976c66a8a1e2bca21db31965a38.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/783ac976c66a8a1e2bca21db31965a38.500x500x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "The Norm",
//           "title_with_featured": "The Norm",
//           "url": "https://genius.com/Uppermost-the-norm-annotated",
//           "song_art_primary_color": "#fc0404",
//           "song_art_secondary_color": "#830101",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/248506",
//             "header_image_url": "https://images.genius.com/9b6d516d17320c8efb904f82e8207bb7.1000x563x1.jpg",
//             "id": 248506,
//             "image_url": "https://images.genius.com/fc157694b13034e22cd4ff0224e29288.400x400x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Uppermost",
//             "url": "https://genius.com/artists/Uppermost"
//           }
//         },
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/3654162",
//           "full_title": "EXTREME MEME MUSIC MEGAMASHUP 2 by DaymanOurSavior",
//           "header_image_thumbnail_url": "https://images.genius.com/bf6b12c34611232c4dbf9ef6c6fec89c.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/bf6b12c34611232c4dbf9ef6c6fec89c.700x700x1.jpg",
//           "id": 3654162,
//           "lyrics_owner_id": 5182512,
//           "lyrics_state": "complete",
//           "path": "/Daymanoursavior-extreme-meme-music-megamashup-2-lyrics",
//           "pyongs_count": 4,
//           "song_art_image_thumbnail_url": "https://images.genius.com/bf6b12c34611232c4dbf9ef6c6fec89c.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/bf6b12c34611232c4dbf9ef6c6fec89c.700x700x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false,
//             "pageviews": 6113
//           },
//           "title": "EXTREME MEME MUSIC MEGAMASHUP 2",
//           "title_with_featured": "EXTREME MEME MUSIC MEGAMASHUP 2",
//           "url": "https://genius.com/Daymanoursavior-extreme-meme-music-megamashup-2-lyrics",
//           "song_art_primary_color": "#f0b70e",
//           "song_art_secondary_color": "#f47cd4",
//           "song_art_text_color": "#000",
//           "primary_artist": {
//             "api_path": "/artists/1409018",
//             "header_image_url": "https://images.genius.com/fcf684aa4aff28f816cd334216be8377.200x200x1.jpg",
//             "id": 1409018,
//             "image_url": "https://images.genius.com/fcf684aa4aff28f816cd334216be8377.200x200x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "DaymanOurSavior",
//             "url": "https://genius.com/artists/Daymanoursavior"
//           }
//         },
//         {
//           "annotation_count": 2,
//           "api_path": "/songs/3714106",
//           "full_title": "Numb Cloud by Lunaku (Ft. FrenteFria)",
//           "header_image_thumbnail_url": "https://images.genius.com/c10d9f75c997c8e5f77fe810f3625ad1.300x169x1.jpg",
//           "header_image_url": "https://images.genius.com/c10d9f75c997c8e5f77fe810f3625ad1.1000x563x1.jpg",
//           "id": 3714106,
//           "lyrics_owner_id": 5476280,
//           "lyrics_state": "complete",
//           "path": "/Lunaku-numb-cloud-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/8ec81399e5b625e28291c350fd452065.300x300x1.png",
//           "song_art_image_url": "https://images.genius.com/8ec81399e5b625e28291c350fd452065.500x500x1.png",
//           "stats": {
//             "unreviewed_annotations": 2,
//             "hot": false
//           },
//           "title": "Numb Cloud",
//           "title_with_featured": "Numb Cloud (Ft. FrenteFria)",
//           "url": "https://genius.com/Lunaku-numb-cloud-lyrics",
//           "song_art_primary_color": "#674cb5",
//           "song_art_secondary_color": "#8c3c2c",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1317481",
//             "header_image_url": "https://images.genius.com/f92e24d01d7323b7f781f2a7c4004120.1000x567x1.png",
//             "id": 1317481,
//             "image_url": "https://images.genius.com/5ec1aa79595838b6db97119913683c78.656x656x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Lunaku",
//             "url": "https://genius.com/artists/Lunaku"
//           }
//         },
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/4263850",
//           "full_title": "Feel You by The Bass Engineers",
//           "header_image_thumbnail_url": "https://images.genius.com/ff7127e9067d24f027b7ed36c8f7bf0f.300x300x1.png",
//           "header_image_url": "https://images.genius.com/ff7127e9067d24f027b7ed36c8f7bf0f.1000x1000x1.png",
//           "id": 4263850,
//           "lyrics_owner_id": 3998702,
//           "lyrics_state": "complete",
//           "path": "/The-bass-engineers-feel-you-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/ff7127e9067d24f027b7ed36c8f7bf0f.300x300x1.png",
//           "song_art_image_url": "https://images.genius.com/ff7127e9067d24f027b7ed36c8f7bf0f.1000x1000x1.png",
//           "stats": {
//             "unreviewed_annotations": 1,
//             "hot": false
//           },
//           "title": "Feel You",
//           "title_with_featured": "Feel You",
//           "url": "https://genius.com/The-bass-engineers-feel-you-lyrics",
//           "song_art_primary_color": "#c9358c",
//           "song_art_secondary_color": "#040c05",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1710837",
//             "header_image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//             "id": 1710837,
//             "image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "The Bass Engineers",
//             "url": "https://genius.com/artists/The-bass-engineers"
//           }
//         },
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/4324984",
//           "full_title": "Baby I’m Back (I & II) by Pluffaduff",
//           "header_image_thumbnail_url": "https://images.genius.com/3f9af5a79e389df4e7fd342ea29d8625.300x168x1.webp",
//           "header_image_url": "https://images.genius.com/3f9af5a79e389df4e7fd342ea29d8625.336x188x1.webp",
//           "id": 4324984,
//           "lyrics_owner_id": 1587767,
//           "lyrics_state": "complete",
//           "path": "/Pluffaduff-baby-im-back-i-and-ii-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/3f9af5a79e389df4e7fd342ea29d8625.300x168x1.webp",
//           "song_art_image_url": "https://images.genius.com/3f9af5a79e389df4e7fd342ea29d8625.336x188x1.webp",
//           "stats": {
//             "unreviewed_annotations": 1,
//             "hot": false
//           },
//           "title": "Baby I’m Back (I & II)",
//           "title_with_featured": "Baby I’m Back (I & II)",
//           "url": "https://genius.com/Pluffaduff-baby-im-back-i-and-ii-lyrics",
//           "song_art_primary_color": "#E9E9E9",
//           "song_art_secondary_color": "#E9E9E9",
//           "song_art_text_color": "#000000",
//           "primary_artist": {
//             "api_path": "/artists/1673277",
//             "header_image_url": "https://images.genius.com/e89e99de28fbf1d3336c3db7b90d0ffa.975x180x1.png",
//             "id": 1673277,
//             "image_url": "https://images.genius.com/3aed6aa155366cfdd6683bc4da095ca3.900x900x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Pluffaduff",
//             "url": "https://genius.com/artists/Pluffaduff"
//           }
//         },
//         {
//           "annotation_count": 14,
//           "api_path": "/songs/4558484",
//           "full_title": "Hollywood Whore by Machine Gun Kelly",
//           "header_image_thumbnail_url": "https://images.genius.com/8b78402eb0b19840692e84d6d9514ed9.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/8b78402eb0b19840692e84d6d9514ed9.1000x1000x1.jpg",
//           "id": 4558484,
//           "lyrics_owner_id": 1851958,
//           "lyrics_state": "complete",
//           "path": "/Machine-gun-kelly-hollywood-whore-lyrics",
//           "pyongs_count": 45,
//           "song_art_image_thumbnail_url": "https://images.genius.com/16813a56ea7ec07cf1693afde232e40c.300x300x1.png",
//           "song_art_image_url": "https://images.genius.com/16813a56ea7ec07cf1693afde232e40c.1000x1000x1.png",
//           "stats": {
//             "unreviewed_annotations": 4,
//             "hot": false,
//             "pageviews": 214548
//           },
//           "title": "Hollywood Whore",
//           "title_with_featured": "Hollywood Whore",
//           "url": "https://genius.com/Machine-gun-kelly-hollywood-whore-lyrics",
//           "song_art_primary_color": "#ca2c2c",
//           "song_art_secondary_color": "#801f1f",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1665",
//             "header_image_url": "https://images.genius.com/d627cb7546aca80426f53d5b0c512fad.1000x563x1.jpg",
//             "id": 1665,
//             "image_url": "https://images.genius.com/bee1868cba78bf4b170886b3368c4ae8.640x640x1.jpg",
//             "is_meme_verified": true,
//             "is_verified": true,
//             "name": "Machine Gun Kelly",
//             "url": "https://genius.com/artists/Machine-gun-kelly",
//             "iq": 27774
//           }
//         },
//         {
//           "annotation_count": 52,
//           "api_path": "/songs/4610966",
//           "full_title": "File Select Fusion 3½ by TheGuy",
//           "header_image_thumbnail_url": "https://images.genius.com/fc4f3dc03925e06d4199946647276355.300x225x1.png",
//           "header_image_url": "https://images.genius.com/fc4f3dc03925e06d4199946647276355.1000x750x1.png",
//           "id": 4610966,
//           "lyrics_owner_id": 8651188,
//           "lyrics_state": "complete",
//           "path": "/Theguy-file-select-fusion-312-lyrics",
//           "pyongs_count": 4,
//           "song_art_image_thumbnail_url": "https://images.genius.com/3292a3bf29ffdce260349c1fd4ab9630.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/3292a3bf29ffdce260349c1fd4ab9630.500x500x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 52,
//             "hot": false
//           },
//           "title": "File Select Fusion 3½",
//           "title_with_featured": "File Select Fusion 3½",
//           "url": "https://genius.com/Theguy-file-select-fusion-312-lyrics",
//           "song_art_primary_color": "#d73350",
//           "song_art_secondary_color": "#b51817",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1535918",
//             "header_image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//             "id": 1535918,
//             "image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "TheGuy",
//             "url": "https://genius.com/artists/Theguy"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/4888231",
//           "full_title": "EXTREME MEME MEGAMIX III by Gyrotron",
//           "header_image_thumbnail_url": "https://images.genius.com/45bff7dd6aa8ac1ac23aad9cd6e63d0d.300x225x1.jpg",
//           "header_image_url": "https://images.genius.com/45bff7dd6aa8ac1ac23aad9cd6e63d0d.480x360x1.jpg",
//           "id": 4888231,
//           "lyrics_owner_id": 8942631,
//           "lyrics_state": "complete",
//           "path": "/Gyrotron-extreme-meme-megamix-iii-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/45bff7dd6aa8ac1ac23aad9cd6e63d0d.300x225x1.jpg",
//           "song_art_image_url": "https://images.genius.com/45bff7dd6aa8ac1ac23aad9cd6e63d0d.480x360x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "EXTREME MEME MEGAMIX III",
//           "title_with_featured": "EXTREME MEME MEGAMIX III",
//           "url": "https://genius.com/Gyrotron-extreme-meme-megamix-iii-lyrics",
//           "song_art_primary_color": "#f6db28",
//           "song_art_secondary_color": "#b494d4",
//           "song_art_text_color": "#000",
//           "primary_artist": {
//             "api_path": "/artists/1486274",
//             "header_image_url": "https://images.genius.com/26f04908ffb972e2a1fffeb4bc797d11.500x500x1.jpg",
//             "id": 1486274,
//             "image_url": "https://images.genius.com/26f04908ffb972e2a1fffeb4bc797d11.500x500x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Gyrotron",
//             "url": "https://genius.com/artists/Gyrotron"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/5032561",
//           "full_title": "Baby I'm Back IV: The Fourth Awakens by Pluffaduff",
//           "header_image_thumbnail_url": "https://images.genius.com/e0e112ce6c0e61aedf5854f4120c83fa.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/e0e112ce6c0e61aedf5854f4120c83fa.500x500x1.jpg",
//           "id": 5032561,
//           "lyrics_owner_id": 8392057,
//           "lyrics_state": "complete",
//           "path": "/Pluffaduff-baby-im-back-iv-the-fourth-awakens-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/e0e112ce6c0e61aedf5854f4120c83fa.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/e0e112ce6c0e61aedf5854f4120c83fa.500x500x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Baby I’m Back IV: The Fourth Awakens",
//           "title_with_featured": "Baby I'm Back IV: The Fourth Awakens",
//           "url": "https://genius.com/Pluffaduff-baby-im-back-iv-the-fourth-awakens-lyrics",
//           "song_art_primary_color": "#38ca16",
//           "song_art_secondary_color": "#0bb907",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1673277",
//             "header_image_url": "https://images.genius.com/e89e99de28fbf1d3336c3db7b90d0ffa.975x180x1.png",
//             "id": 1673277,
//             "image_url": "https://images.genius.com/3aed6aa155366cfdd6683bc4da095ca3.900x900x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Pluffaduff",
//             "url": "https://genius.com/artists/Pluffaduff"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/5082976",
//           "full_title": "NUMB by DEATH 8",
//           "header_image_thumbnail_url": "https://images.genius.com/deafb62dccce5d12dbdb0a1005875455.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/deafb62dccce5d12dbdb0a1005875455.1000x1000x1.jpg",
//           "id": 5082976,
//           "lyrics_owner_id": 7568596,
//           "lyrics_state": "unreleased",
//           "path": "/Death-8-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/deafb62dccce5d12dbdb0a1005875455.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/deafb62dccce5d12dbdb0a1005875455.1000x1000x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "NUMB",
//           "title_with_featured": "NUMB",
//           "url": "https://genius.com/Death-8-numb-lyrics",
//           "song_art_primary_color": "#5c5cfb",
//           "song_art_secondary_color": "#3c1a06",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1737382",
//             "header_image_url": "https://images.genius.com/d0e50fd756d71957fb4aa879bb54e04c.1000x1000x1.jpg",
//             "id": 1737382,
//             "image_url": "https://images.genius.com/deafb62dccce5d12dbdb0a1005875455.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "DEATH 8",
//             "url": "https://genius.com/artists/Death-8"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/5156326",
//           "full_title": "Feel You [Im Plural Gemeint] by The Bass Engineers x Bob der Bassbuilder und die Housemasters",
//           "header_image_thumbnail_url": "https://images.genius.com/de234aaa365cdb8a50473b051e3084b6.300x300x1.png",
//           "header_image_url": "https://images.genius.com/de234aaa365cdb8a50473b051e3084b6.1000x1000x1.png",
//           "id": 5156326,
//           "lyrics_owner_id": 3998702,
//           "lyrics_state": "incomplete",
//           "path": "/The-bass-engineers-x-bob-der-bassbuilder-und-die-housemasters-feel-you-im-plural-gemeint-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/de234aaa365cdb8a50473b051e3084b6.300x300x1.png",
//           "song_art_image_url": "https://images.genius.com/de234aaa365cdb8a50473b051e3084b6.1000x1000x1.png",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Feel You [Im Plural Gemeint]",
//           "title_with_featured": "Feel You [Im Plural Gemeint]",
//           "url": "https://genius.com/The-bass-engineers-x-bob-der-bassbuilder-und-die-housemasters-feel-you-im-plural-gemeint-lyrics",
//           "song_art_primary_color": "#04f651",
//           "song_art_secondary_color": "#f07ccc",
//           "song_art_text_color": "#000",
//           "primary_artist": {
//             "api_path": "/artists/2067992",
//             "header_image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//             "id": 2067992,
//             "image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "The Bass Engineers x Bob der Bassbuilder und die Housemasters",
//             "url": "https://genius.com/artists/The-bass-engineers-x-bob-der-bassbuilder-und-die-housemasters"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/5876059",
//           "full_title": "Start of Something by Pluffaduff",
//           "header_image_thumbnail_url": "https://images.genius.com/b5fa16f2811c7778c3344b4cc53c4251.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/b5fa16f2811c7778c3344b4cc53c4251.1000x1000x1.jpg",
//           "id": 5876059,
//           "lyrics_owner_id": 9591314,
//           "lyrics_state": "complete",
//           "path": "/Pluffaduff-start-of-something-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/b5fa16f2811c7778c3344b4cc53c4251.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/b5fa16f2811c7778c3344b4cc53c4251.1000x1000x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Start of Something",
//           "title_with_featured": "Start of Something",
//           "url": "https://genius.com/Pluffaduff-start-of-something-lyrics",
//           "song_art_primary_color": "#fc7b04",
//           "song_art_secondary_color": "#9e730b",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1673277",
//             "header_image_url": "https://images.genius.com/e89e99de28fbf1d3336c3db7b90d0ffa.975x180x1.png",
//             "id": 1673277,
//             "image_url": "https://images.genius.com/3aed6aa155366cfdd6683bc4da095ca3.900x900x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Pluffaduff",
//             "url": "https://genius.com/artists/Pluffaduff"
//           }
//         },
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/5883500",
//           "full_title": "Numb Ride by Dean Aguiar",
//           "header_image_thumbnail_url": "https://images.genius.com/4199d3b5cb38fcc12b2cd97ae106fbb3.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/4199d3b5cb38fcc12b2cd97ae106fbb3.1000x1000x1.jpg",
//           "id": 5883500,
//           "lyrics_owner_id": 10776627,
//           "lyrics_state": "complete",
//           "path": "/Dean-aguiar-numb-ride-annotated",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/4199d3b5cb38fcc12b2cd97ae106fbb3.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/4199d3b5cb38fcc12b2cd97ae106fbb3.1000x1000x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 1,
//             "hot": false
//           },
//           "title": "Numb Ride",
//           "title_with_featured": "Numb Ride",
//           "url": "https://genius.com/Dean-aguiar-numb-ride-annotated",
//           "song_art_primary_color": "#af7f1f",
//           "song_art_secondary_color": "#714312",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1827801",
//             "header_image_url": "https://images.genius.com/007192127626ad008e503b2bf9897671.800x600x1.jpg",
//             "id": 1827801,
//             "image_url": "https://images.genius.com/71465abb287a30c89bdd6e2d16d05f1f.600x600x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Dean Aguiar",
//             "url": "https://genius.com/artists/Dean-aguiar"
//           }
//         },
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/6099380",
//           "full_title": "Aven by Uppermost",
//           "header_image_thumbnail_url": "https://images.genius.com/ed7c44fe65527852d6f17c79ecfdb76f.300x169x1.jpg",
//           "header_image_url": "https://images.genius.com/ed7c44fe65527852d6f17c79ecfdb76f.1000x563x1.jpg",
//           "id": 6099380,
//           "lyrics_owner_id": 9794789,
//           "lyrics_state": "complete",
//           "path": "/Uppermost-aven-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/ed7c44fe65527852d6f17c79ecfdb76f.300x169x1.jpg",
//           "song_art_image_url": "https://images.genius.com/ed7c44fe65527852d6f17c79ecfdb76f.1000x563x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 1,
//             "hot": false
//           },
//           "title": "Aven",
//           "title_with_featured": "Aven",
//           "url": "https://genius.com/Uppermost-aven-lyrics",
//           "song_art_primary_color": "#c46c0e",
//           "song_art_secondary_color": "#743c11",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/248506",
//             "header_image_url": "https://images.genius.com/9b6d516d17320c8efb904f82e8207bb7.1000x563x1.jpg",
//             "id": 248506,
//             "image_url": "https://images.genius.com/fc157694b13034e22cd4ff0224e29288.400x400x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Uppermost",
//             "url": "https://genius.com/artists/Uppermost"
//           }
//         },
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/6117789",
//           "full_title": "Copyright Strike by Ontopic",
//           "header_image_thumbnail_url": "https://images.genius.com/5f06dfc6f1cc7a759f4dd58b59e8e8fe.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/5f06dfc6f1cc7a759f4dd58b59e8e8fe.1000x1000x1.jpg",
//           "id": 6117789,
//           "lyrics_owner_id": 5773728,
//           "lyrics_state": "complete",
//           "path": "/Ontopic-copyright-strike-lyrics",
//           "pyongs_count": 1,
//           "song_art_image_thumbnail_url": "https://images.genius.com/5f06dfc6f1cc7a759f4dd58b59e8e8fe.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/5f06dfc6f1cc7a759f4dd58b59e8e8fe.1000x1000x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 1,
//             "hot": false
//           },
//           "title": "Copyright Strike",
//           "title_with_featured": "Copyright Strike",
//           "url": "https://genius.com/Ontopic-copyright-strike-lyrics",
//           "song_art_primary_color": "#9e4060",
//           "song_art_secondary_color": "#66291c",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/2274845",
//             "header_image_url": "https://images.genius.com/33c6f6854afe97cf89bc135b3ab45dca.176x176x1.jpg",
//             "id": 2274845,
//             "image_url": "https://images.genius.com/33c6f6854afe97cf89bc135b3ab45dca.176x176x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Ontopic",
//             "url": "https://genius.com/artists/Ontopic"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/6162032",
//           "full_title": "​hollywood whore (remix) by Jason Rowles",
//           "header_image_thumbnail_url": "https://images.genius.com/0114a6490e1786e3c68e448c4ea50538.220x220x1.png",
//           "header_image_url": "https://images.genius.com/0114a6490e1786e3c68e448c4ea50538.220x220x1.png",
//           "id": 6162032,
//           "lyrics_owner_id": 11904103,
//           "lyrics_state": "unreleased",
//           "path": "/Jason-rowles-hollywood-whore-remix-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/0114a6490e1786e3c68e448c4ea50538.220x220x1.png",
//           "song_art_image_url": "https://images.genius.com/0114a6490e1786e3c68e448c4ea50538.220x220x1.png",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "​hollywood whore (remix)",
//           "title_with_featured": "​hollywood whore (remix)",
//           "url": "https://genius.com/Jason-rowles-hollywood-whore-remix-lyrics",
//           "song_art_primary_color": "#ca2c2c",
//           "song_art_secondary_color": "#822222",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/2470834",
//             "header_image_url": "https://images.genius.com/1943e635471f509825780fcb4d68975f.200x200x1.jpg",
//             "id": 2470834,
//             "image_url": "https://images.genius.com/c3b30e2672533cbc735551d8ae6153a8.200x200x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Jason Rowles",
//             "url": "https://genius.com/artists/Jason-rowles"
//           }
//         },
//         {
//           "annotation_count": 2,
//           "api_path": "/songs/6281722",
//           "full_title": "2000-2019 mashup | 200 songs from the last 20 years by YamiNoBahamut",
//           "header_image_thumbnail_url": "https://images.genius.com/e15a8e9fbe4b6bcb83208fef8c0bce9c.300x169x1.png",
//           "header_image_url": "https://images.genius.com/e15a8e9fbe4b6bcb83208fef8c0bce9c.1000x563x1.png",
//           "id": 6281722,
//           "lyrics_owner_id": 5925390,
//           "lyrics_state": "complete",
//           "path": "/Yaminobahamut-2000-2019-mashup-200-songs-from-the-last-20-years-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/e15a8e9fbe4b6bcb83208fef8c0bce9c.300x169x1.png",
//           "song_art_image_url": "https://images.genius.com/e15a8e9fbe4b6bcb83208fef8c0bce9c.1000x563x1.png",
//           "stats": {
//             "unreviewed_annotations": 2,
//             "hot": false
//           },
//           "title": "2000-2019 mashup | 200 songs from the last 20 years",
//           "title_with_featured": "2000-2019 mashup | 200 songs from the last 20 years",
//           "url": "https://genius.com/Yaminobahamut-2000-2019-mashup-200-songs-from-the-last-20-years-lyrics",
//           "song_art_primary_color": "#7f7f7f",
//           "song_art_secondary_color": "#424242",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/2523195",
//             "header_image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//             "id": 2523195,
//             "image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "YamiNoBahamut",
//             "url": "https://genius.com/artists/Yaminobahamut"
//           }
//         },
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/6721574",
//           "full_title": "MEME TILL YOU'RE DEAD by Dabunky (Ft. Cyranek)",
//           "header_image_thumbnail_url": "https://images.genius.com/de2360e085c706a6707a9823962fd81c.268x268x1.png",
//           "header_image_url": "https://images.genius.com/de2360e085c706a6707a9823962fd81c.268x268x1.png",
//           "id": 6721574,
//           "lyrics_owner_id": 8333224,
//           "lyrics_state": "complete",
//           "path": "/Dabunky-meme-till-youre-dead-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/de2360e085c706a6707a9823962fd81c.268x268x1.png",
//           "song_art_image_url": "https://images.genius.com/de2360e085c706a6707a9823962fd81c.268x268x1.png",
//           "stats": {
//             "unreviewed_annotations": 1,
//             "hot": false
//           },
//           "title": "MEME TILL YOU’RE DEAD",
//           "title_with_featured": "MEME TILL YOU'RE DEAD (Ft. Cyranek)",
//           "url": "https://genius.com/Dabunky-meme-till-youre-dead-lyrics",
//           "song_art_primary_color": "#fc9c4c",
//           "song_art_secondary_color": "#faa45c",
//           "song_art_text_color": "#000",
//           "primary_artist": {
//             "api_path": "/artists/2695978",
//             "header_image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//             "id": 2695978,
//             "image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Dabunky",
//             "url": "https://genius.com/artists/Dabunky"
//           }
//         },
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/6806461",
//           "full_title": "Kids Can't Feel by Pluffaduff",
//           "header_image_thumbnail_url": "https://images.genius.com/95a2cbeec9d77a7886def46939ef1743.300x300x1.png",
//           "header_image_url": "https://images.genius.com/95a2cbeec9d77a7886def46939ef1743.700x700x1.png",
//           "id": 6806461,
//           "lyrics_owner_id": 11554664,
//           "lyrics_state": "complete",
//           "path": "/Pluffaduff-kids-cant-feel-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/95a2cbeec9d77a7886def46939ef1743.300x300x1.png",
//           "song_art_image_url": "https://images.genius.com/95a2cbeec9d77a7886def46939ef1743.700x700x1.png",
//           "stats": {
//             "unreviewed_annotations": 1,
//             "hot": false
//           },
//           "title": "Kids Can’t Feel",
//           "title_with_featured": "Kids Can't Feel",
//           "url": "https://genius.com/Pluffaduff-kids-cant-feel-lyrics",
//           "song_art_primary_color": "#4d6ab7",
//           "song_art_secondary_color": "#394f87",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1673277",
//             "header_image_url": "https://images.genius.com/e89e99de28fbf1d3336c3db7b90d0ffa.975x180x1.png",
//             "id": 1673277,
//             "image_url": "https://images.genius.com/3aed6aa155366cfdd6683bc4da095ca3.900x900x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Pluffaduff",
//             "url": "https://genius.com/artists/Pluffaduff"
//           }
//         }
//       ]
//     },
//     {
//       "relationship_type": "interpolates",
//       "type": "interpolates",
//       "songs": []
//     },
//     {
//       "relationship_type": "interpolated_by",
//       "type": "interpolated_by",
//       "songs": [
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/2953090",
//           "full_title": "Floating Through The Air by Killstation",
//           "header_image_thumbnail_url": "https://images.genius.com/e1c1eaa056e52b2b4f36314129138279.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/e1c1eaa056e52b2b4f36314129138279.700x700x1.jpg",
//           "id": 2953090,
//           "lyrics_owner_id": 278667,
//           "lyrics_state": "complete",
//           "path": "/Killstation-floating-through-the-air-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/e1c1eaa056e52b2b4f36314129138279.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/e1c1eaa056e52b2b4f36314129138279.700x700x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Floating Through The Air",
//           "title_with_featured": "Floating Through The Air",
//           "url": "https://genius.com/Killstation-floating-through-the-air-lyrics",
//           "song_art_primary_color": "#4c8ac9",
//           "song_art_secondary_color": "#143c80",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/272192",
//             "header_image_url": "https://images.genius.com/d1a7473944210f48b5fba01a9cdf2933.770x770x1.jpg",
//             "id": 272192,
//             "image_url": "https://images.genius.com/7f5a9384499269051491feaecae392d9.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Killstation",
//             "url": "https://genius.com/artists/Killstation"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/3070137",
//           "full_title": "Air by Killstation",
//           "header_image_thumbnail_url": "https://images.genius.com/34de150f4b5394291d482065c53d3770.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/34de150f4b5394291d482065c53d3770.500x500x1.jpg",
//           "id": 3070137,
//           "lyrics_owner_id": 3308817,
//           "lyrics_state": "complete",
//           "path": "/Killstation-air-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/34de150f4b5394291d482065c53d3770.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/34de150f4b5394291d482065c53d3770.500x500x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Air",
//           "title_with_featured": "Air",
//           "url": "https://genius.com/Killstation-air-lyrics",
//           "song_art_primary_color": "#94cc84",
//           "song_art_secondary_color": "#8cd49c",
//           "song_art_text_color": "#000",
//           "primary_artist": {
//             "api_path": "/artists/272192",
//             "header_image_url": "https://images.genius.com/d1a7473944210f48b5fba01a9cdf2933.770x770x1.jpg",
//             "id": 272192,
//             "image_url": "https://images.genius.com/7f5a9384499269051491feaecae392d9.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Killstation",
//             "url": "https://genius.com/artists/Killstation"
//           }
//         },
//         {
//           "annotation_count": 19,
//           "api_path": "/songs/3167426",
//           "full_title": "Ohio Is for Emo Kids by Canadian Softball",
//           "header_image_thumbnail_url": "https://images.genius.com/c66e76720b60940d5cb84153220954ae.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/c66e76720b60940d5cb84153220954ae.1000x1000x1.jpg",
//           "id": 3167426,
//           "lyrics_owner_id": 247898,
//           "lyrics_state": "complete",
//           "path": "/Canadian-softball-ohio-is-for-emo-kids-lyrics",
//           "pyongs_count": 8,
//           "song_art_image_thumbnail_url": "https://images.genius.com/c66e76720b60940d5cb84153220954ae.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/c66e76720b60940d5cb84153220954ae.1000x1000x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false,
//             "pageviews": 37691
//           },
//           "title": "Ohio Is for Emo Kids",
//           "title_with_featured": "Ohio Is for Emo Kids",
//           "url": "https://genius.com/Canadian-softball-ohio-is-for-emo-kids-lyrics",
//           "song_art_primary_color": "#6a8394",
//           "song_art_secondary_color": "#37444d",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/461111",
//             "header_image_url": "https://images.genius.com/43915f9efe9a4eaba2f8cf197253b72a.1000x562x1.jpg",
//             "id": 461111,
//             "image_url": "https://images.genius.com/8002d0229d8cb5268fd0e9e5d5584d2b.884x884x1.png",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Canadian Softball",
//             "url": "https://genius.com/artists/Canadian-softball"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/7161079",
//           "full_title": "Numb by Aaron Richards & Mr FijiWiji",
//           "header_image_thumbnail_url": "https://assets.genius.com/images/default_cover_image.png?1630514181",
//           "header_image_url": "https://assets.genius.com/images/default_cover_image.png?1630514181",
//           "id": 7161079,
//           "lyrics_owner_id": 11146121,
//           "lyrics_state": "unreleased",
//           "path": "/Aaron-richards-and-mr-fijiwiji-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://assets.genius.com/images/default_cover_image.png?1630514181",
//           "song_art_image_url": "https://assets.genius.com/images/default_cover_image.png?1630514181",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/Aaron-richards-and-mr-fijiwiji-numb-lyrics",
//           "song_art_primary_color": "#E9E9E9",
//           "song_art_secondary_color": "#E9E9E9",
//           "song_art_text_color": "#000000",
//           "primary_artist": {
//             "api_path": "/artists/2866703",
//             "header_image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//             "id": 2866703,
//             "image_url": "https://assets.genius.com/images/default_avatar_300.png?1630514181",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Aaron Richards & Mr FijiWiji",
//             "url": "https://genius.com/artists/Aaron-richards-and-mr-fijiwiji"
//           }
//         }
//       ]
//     },
//     {
//       "relationship_type": "cover_of",
//       "type": "cover_of",
//       "songs": []
//     },
//     {
//       "relationship_type": "covered_by",
//       "type": "covered_by",
//       "songs": [
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/929634",
//           "full_title": "Numb by Jamelia",
//           "header_image_thumbnail_url": "https://images.genius.com/7277979a8fc52751eceafe21faf1c8a7.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/7277979a8fc52751eceafe21faf1c8a7.371x371x1.jpg",
//           "id": 929634,
//           "lyrics_owner_id": 1549345,
//           "lyrics_state": "complete",
//           "path": "/Jamelia-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/7277979a8fc52751eceafe21faf1c8a7.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/7277979a8fc52751eceafe21faf1c8a7.371x371x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/Jamelia-numb-lyrics",
//           "song_art_primary_color": "#9e5c43",
//           "song_art_secondary_color": "#662c1c",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/8401",
//             "header_image_url": "https://images.genius.com/a149671b1174f13cfd16645a5a109f2c.480x360x1.jpg",
//             "id": 8401,
//             "image_url": "https://images.genius.com/7277979a8fc52751eceafe21faf1c8a7.371x371x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Jamelia",
//             "url": "https://genius.com/artists/Jamelia"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/2966975",
//           "full_title": "Numb by Empires Fade",
//           "header_image_thumbnail_url": "https://images.genius.com/5134e0cb32cd299ffece3d57d55be082.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/5134e0cb32cd299ffece3d57d55be082.640x640x1.jpg",
//           "id": 2966975,
//           "lyrics_owner_id": 321054,
//           "lyrics_state": "complete",
//           "path": "/Empires-fade-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/5134e0cb32cd299ffece3d57d55be082.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/5134e0cb32cd299ffece3d57d55be082.640x640x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/Empires-fade-numb-lyrics",
//           "song_art_primary_color": "#cc5c5c",
//           "song_art_secondary_color": "#040b14",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/995546",
//             "header_image_url": "https://images.genius.com/5134e0cb32cd299ffece3d57d55be082.640x640x1.jpg",
//             "id": 995546,
//             "image_url": "https://images.genius.com/5134e0cb32cd299ffece3d57d55be082.640x640x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Empires Fade",
//             "url": "https://genius.com/artists/Empires-fade"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/3042653",
//           "full_title": "Numb by Fame on Fire",
//           "header_image_thumbnail_url": "https://images.genius.com/7aaee3d86e5d45849abdbf0f7f103b94.300x195x1.jpg",
//           "header_image_url": "https://images.genius.com/7aaee3d86e5d45849abdbf0f7f103b94.640x417x1.jpg",
//           "id": 3042653,
//           "lyrics_owner_id": 347853,
//           "lyrics_state": "complete",
//           "path": "/Fame-on-fire-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/936dfbd9461091f3c8b7145a9162cd5c.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/936dfbd9461091f3c8b7145a9162cd5c.350x350x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/Fame-on-fire-numb-lyrics",
//           "song_art_primary_color": "#4c4cb2",
//           "song_art_secondary_color": "#0c0c1c",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1064801",
//             "header_image_url": "https://images.genius.com/ce6dc87f81ccefb9be2825295e080d05.1000x563x1.jpg",
//             "id": 1064801,
//             "image_url": "https://images.genius.com/360cf40fcc3974140b22e4619871634b.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": true,
//             "name": "Fame on Fire",
//             "url": "https://genius.com/artists/Fame-on-fire",
//             "iq": 720
//           }
//         },
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/3165767",
//           "full_title": "Numb (Cover) by Manic Drive",
//           "header_image_thumbnail_url": "https://images.genius.com/b0ee2b02d3bdcb51a57a22fb14cab362.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/b0ee2b02d3bdcb51a57a22fb14cab362.720x720x1.jpg",
//           "id": 3165767,
//           "lyrics_owner_id": 3499957,
//           "lyrics_state": "complete",
//           "path": "/Manic-drive-numb-cover-lyrics",
//           "pyongs_count": 1,
//           "song_art_image_thumbnail_url": "https://images.genius.com/b0ee2b02d3bdcb51a57a22fb14cab362.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/b0ee2b02d3bdcb51a57a22fb14cab362.720x720x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb (Cover)",
//           "title_with_featured": "Numb (Cover)",
//           "url": "https://genius.com/Manic-drive-numb-cover-lyrics",
//           "song_art_primary_color": "#2a8ad4",
//           "song_art_secondary_color": "#040d14",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/218718",
//             "header_image_url": "https://images.genius.com/b0ee2b02d3bdcb51a57a22fb14cab362.720x720x1.jpg",
//             "id": 218718,
//             "image_url": "https://images.genius.com/b0ee2b02d3bdcb51a57a22fb14cab362.720x720x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Manic Drive",
//             "url": "https://genius.com/artists/Manic-drive"
//           }
//         },
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/3175875",
//           "full_title": "Numb by Machine Gun Kelly",
//           "header_image_thumbnail_url": "https://images.genius.com/bee1868cba78bf4b170886b3368c4ae8.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/bee1868cba78bf4b170886b3368c4ae8.640x640x1.jpg",
//           "id": 3175875,
//           "lyrics_owner_id": 321054,
//           "lyrics_state": "complete",
//           "path": "/Machine-gun-kelly-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/bee1868cba78bf4b170886b3368c4ae8.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/bee1868cba78bf4b170886b3368c4ae8.640x640x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 1,
//             "hot": false,
//             "pageviews": 11597
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/Machine-gun-kelly-numb-lyrics",
//           "song_art_primary_color": "#7e443b",
//           "song_art_secondary_color": "#101424",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1665",
//             "header_image_url": "https://images.genius.com/d627cb7546aca80426f53d5b0c512fad.1000x563x1.jpg",
//             "id": 1665,
//             "image_url": "https://images.genius.com/bee1868cba78bf4b170886b3368c4ae8.640x640x1.jpg",
//             "is_meme_verified": true,
//             "is_verified": true,
//             "name": "Machine Gun Kelly",
//             "url": "https://genius.com/artists/Machine-gun-kelly",
//             "iq": 27774
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/3244622",
//           "full_title": "Numb by Dead by April",
//           "header_image_thumbnail_url": "https://images.genius.com/03999a9ce9535da6abe829f222278862.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/03999a9ce9535da6abe829f222278862.600x600x1.jpg",
//           "id": 3244622,
//           "lyrics_owner_id": 1448869,
//           "lyrics_state": "complete",
//           "path": "/Dead-by-april-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/03999a9ce9535da6abe829f222278862.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/03999a9ce9535da6abe829f222278862.600x600x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/Dead-by-april-numb-lyrics",
//           "song_art_primary_color": "#667398",
//           "song_art_secondary_color": "#353b4f",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/145407",
//             "header_image_url": "https://images.genius.com/7d6d868c09b5da34a573fdfa02466564.1000x563x1.jpg",
//             "id": 145407,
//             "image_url": "https://images.genius.com/1122ac7d844730db63eb3273a74ca97a.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Dead by April",
//             "url": "https://genius.com/artists/Dead-by-april"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/3605384",
//           "full_title": "Numb (Linkin Park Cover) by LiL BO WEEP",
//           "header_image_thumbnail_url": "https://images.genius.com/282d520da62f8f7329f04cfb24c5084f.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/282d520da62f8f7329f04cfb24c5084f.563x563x1.jpg",
//           "id": 3605384,
//           "lyrics_owner_id": 1086510,
//           "lyrics_state": "complete",
//           "path": "/Lil-bo-weep-numb-linkin-park-cover-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/98935a45cbc23a28d45d28b6fb35bd17.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/98935a45cbc23a28d45d28b6fb35bd17.500x500x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb (Linkin Park Cover)",
//           "title_with_featured": "Numb (Linkin Park Cover)",
//           "url": "https://genius.com/Lil-bo-weep-numb-linkin-park-cover-lyrics",
//           "song_art_primary_color": "#1c6c9a",
//           "song_art_secondary_color": "#58141b",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1004592",
//             "header_image_url": "https://images.genius.com/7858374fc189a354d73fddb1b3e1424b.741x870x1.jpg",
//             "id": 1004592,
//             "image_url": "https://images.genius.com/d3b701c9ff992f15822abdabf4249569.741x741x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "LiL BO WEEP",
//             "url": "https://genius.com/artists/Lil-bo-weep"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/3973843",
//           "full_title": "Numb by 1ntroVert",
//           "header_image_thumbnail_url": "https://images.genius.com/e19cd0ef76f23cf32a5a27ca7356cf84.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/e19cd0ef76f23cf32a5a27ca7356cf84.1000x1000x1.jpg",
//           "id": 3973843,
//           "lyrics_owner_id": 5469055,
//           "lyrics_state": "complete",
//           "path": "/1ntrovert-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/e19cd0ef76f23cf32a5a27ca7356cf84.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/e19cd0ef76f23cf32a5a27ca7356cf84.1000x1000x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/1ntrovert-numb-lyrics",
//           "song_art_primary_color": "#9f7f5f",
//           "song_art_secondary_color": "#524231",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1507046",
//             "header_image_url": "https://images.genius.com/e7ff8ee3f978cac5267140a05e358063.1000x563x1.jpg",
//             "id": 1507046,
//             "image_url": "https://images.genius.com/b61f72f8f41593faffe6a223827e9409.720x720x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "1ntroVert",
//             "url": "https://genius.com/artists/1ntrovert"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/3986835",
//           "full_title": "Numb by Caleb Hyles (Ft. Myuuji)",
//           "header_image_thumbnail_url": "https://images.genius.com/c7484a04ef657afecd73a9a1bdfc9fb4.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/c7484a04ef657afecd73a9a1bdfc9fb4.1000x1000x1.jpg",
//           "id": 3986835,
//           "lyrics_owner_id": 5585647,
//           "lyrics_state": "complete",
//           "path": "/Caleb-hyles-numb-lyrics",
//           "pyongs_count": 1,
//           "song_art_image_thumbnail_url": "https://images.genius.com/c7484a04ef657afecd73a9a1bdfc9fb4.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/c7484a04ef657afecd73a9a1bdfc9fb4.1000x1000x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb (Ft. Myuuji)",
//           "url": "https://genius.com/Caleb-hyles-numb-lyrics",
//           "song_art_primary_color": "#bea940",
//           "song_art_secondary_color": "#ddd29c",
//           "song_art_text_color": "#000",
//           "primary_artist": {
//             "api_path": "/artists/990950",
//             "header_image_url": "https://images.genius.com/c85f422f3949999751f0f37becec6da6.1000x666x1.jpg",
//             "id": 990950,
//             "image_url": "https://images.genius.com/bb5a3c3390aba3e2a7ca222a98fcf132.400x400x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Caleb Hyles",
//             "url": "https://genius.com/artists/Caleb-hyles"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/4280650",
//           "full_title": "Numb by It Lives, It Breathes",
//           "header_image_thumbnail_url": "https://images.genius.com/cec62e8fbd4cc3dc421b28174626658f.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/cec62e8fbd4cc3dc421b28174626658f.1000x1000x1.jpg",
//           "id": 4280650,
//           "lyrics_owner_id": 1006749,
//           "lyrics_state": "complete",
//           "path": "/It-lives-it-breathes-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/cec62e8fbd4cc3dc421b28174626658f.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/cec62e8fbd4cc3dc421b28174626658f.1000x1000x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/It-lives-it-breathes-numb-lyrics",
//           "song_art_primary_color": "#996f66",
//           "song_art_secondary_color": "#4f3a35",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/370955",
//             "header_image_url": "https://images.genius.com/ed731cd47c154248a0f548295ced8008.902x902x1.jpg",
//             "id": 370955,
//             "image_url": "https://images.genius.com/8e976fafe0df09a836c754b8e3a961ef.463x463x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "It Lives, It Breathes",
//             "url": "https://genius.com/artists/It-lives-it-breathes"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/4504988",
//           "full_title": "Numb by Myuuji",
//           "header_image_thumbnail_url": "https://images.genius.com/3b3e916df76ee5ec72d0218edcbe00d4.300x300x1.png",
//           "header_image_url": "https://images.genius.com/3b3e916df76ee5ec72d0218edcbe00d4.1000x1000x1.png",
//           "id": 4504988,
//           "lyrics_owner_id": 5585647,
//           "lyrics_state": "complete",
//           "path": "/Myuuji-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/3b3e916df76ee5ec72d0218edcbe00d4.300x300x1.png",
//           "song_art_image_url": "https://images.genius.com/3b3e916df76ee5ec72d0218edcbe00d4.1000x1000x1.png",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/Myuuji-numb-lyrics",
//           "song_art_primary_color": "#7f7f7f",
//           "song_art_secondary_color": "#424242",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1125348",
//             "header_image_url": "https://images.genius.com/75fc8769be5ed2a71d1852ac1260bd6a.288x288x1.jpg",
//             "id": 1125348,
//             "image_url": "https://images.genius.com/75fc8769be5ed2a71d1852ac1260bd6a.288x288x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Myuuji",
//             "url": "https://genius.com/artists/Myuuji"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/5251436",
//           "full_title": "Numb by Freya Catherine",
//           "header_image_thumbnail_url": "https://images.genius.com/4b6c469c3306333c3d55bf1931e0a09f.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/4b6c469c3306333c3d55bf1931e0a09f.800x800x1.jpg",
//           "id": 5251436,
//           "lyrics_owner_id": 9385044,
//           "lyrics_state": "complete",
//           "path": "/Freya-catherine-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/4b6c469c3306333c3d55bf1931e0a09f.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/4b6c469c3306333c3d55bf1931e0a09f.800x800x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/Freya-catherine-numb-lyrics",
//           "song_art_primary_color": "#51ad7f",
//           "song_art_secondary_color": "#1c3c2c",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1960025",
//             "header_image_url": "https://images.genius.com/cb273290e51f7c3ccce7dc3d028ec206.1000x333x1.jpg",
//             "id": 1960025,
//             "image_url": "https://images.genius.com/e8908124b78590f7b387771de6ce4870.288x288x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Freya Catherine",
//             "url": "https://genius.com/artists/Freya-catherine"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/5623214",
//           "full_title": "Numb by First to Eleven",
//           "header_image_thumbnail_url": "https://images.genius.com/4d2d401ed60e439200c045e73fa6a55d.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/4d2d401ed60e439200c045e73fa6a55d.600x600x1.jpg",
//           "id": 5623214,
//           "lyrics_owner_id": 6560568,
//           "lyrics_state": "complete",
//           "path": "/First-to-eleven-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/4d2d401ed60e439200c045e73fa6a55d.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/4d2d401ed60e439200c045e73fa6a55d.600x600x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/First-to-eleven-numb-lyrics",
//           "song_art_primary_color": "#2a92bc",
//           "song_art_secondary_color": "#49741b",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/670219",
//             "header_image_url": "https://images.genius.com/73a7e51017d87225b626adee184cadd4.1000x667x1.png",
//             "id": 670219,
//             "image_url": "https://images.genius.com/a02d4dec7ace726dbe8e92ed5d267ea4.720x720x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "First to Eleven",
//             "url": "https://genius.com/artists/First-to-eleven"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/6147947",
//           "full_title": "Numb by Ankor",
//           "header_image_thumbnail_url": "https://images.genius.com/e9eb7e4569df4b7f75e14ae850f0907f.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/e9eb7e4569df4b7f75e14ae850f0907f.640x640x1.jpg",
//           "id": 6147947,
//           "lyrics_owner_id": 9666843,
//           "lyrics_state": "complete",
//           "path": "/Ankor-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/e9eb7e4569df4b7f75e14ae850f0907f.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/e9eb7e4569df4b7f75e14ae850f0907f.640x640x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/Ankor-numb-lyrics",
//           "song_art_primary_color": "#954f38",
//           "song_art_secondary_color": "#243c5c",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1628717",
//             "header_image_url": "https://images.genius.com/aa9809a1d995f05ed49cbb7ec84b2186.1000x267x1.png",
//             "id": 1628717,
//             "image_url": "https://images.genius.com/a73a9b8fe4f601c87159442e65d74d2a.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Ankor",
//             "url": "https://genius.com/artists/Ankor"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/6187108",
//           "full_title": "Hollywood's Bleeding / Numb by Conor Maynard",
//           "header_image_thumbnail_url": "https://images.genius.com/9b6490fcfe93477e8e939e76fbc7a565.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/9b6490fcfe93477e8e939e76fbc7a565.1000x1000x1.jpg",
//           "id": 6187108,
//           "lyrics_owner_id": 5353056,
//           "lyrics_state": "complete",
//           "path": "/Conor-maynard-hollywoods-bleeding-numb-lyrics",
//           "pyongs_count": 1,
//           "song_art_image_thumbnail_url": "https://images.genius.com/9b6490fcfe93477e8e939e76fbc7a565.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/9b6490fcfe93477e8e939e76fbc7a565.1000x1000x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Hollywood’s Bleeding / Numb",
//           "title_with_featured": "Hollywood's Bleeding / Numb",
//           "url": "https://genius.com/Conor-maynard-hollywoods-bleeding-numb-lyrics",
//           "song_art_primary_color": "#bac961",
//           "song_art_secondary_color": "#b4bc62",
//           "song_art_text_color": "#000",
//           "primary_artist": {
//             "api_path": "/artists/21941",
//             "header_image_url": "https://images.genius.com/2d3a8a588d504ca90e4049b2d3ec9c83.1000x525x1.jpg",
//             "id": 21941,
//             "image_url": "https://images.genius.com/40800fa7d2b6fe66db71c7ad51a957fc.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": true,
//             "name": "Conor Maynard",
//             "url": "https://genius.com/artists/Conor-maynard",
//             "iq": 265
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/6196618",
//           "full_title": "Numb by Onlap",
//           "header_image_thumbnail_url": "https://images.genius.com/cdaeea3ae94343c2d0e32e339c68cffd.300x300x1.webp",
//           "header_image_url": "https://images.genius.com/cdaeea3ae94343c2d0e32e339c68cffd.1000x1000x1.webp",
//           "id": 6196618,
//           "lyrics_owner_id": 4295053,
//           "lyrics_state": "complete",
//           "path": "/Onlap-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/cdaeea3ae94343c2d0e32e339c68cffd.300x300x1.webp",
//           "song_art_image_url": "https://images.genius.com/cdaeea3ae94343c2d0e32e339c68cffd.1000x1000x1.webp",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/Onlap-numb-lyrics",
//           "song_art_primary_color": "#E9E9E9",
//           "song_art_secondary_color": "#E9E9E9",
//           "song_art_text_color": "#000000",
//           "primary_artist": {
//             "api_path": "/artists/483139",
//             "header_image_url": "https://images.genius.com/b92dacd3d751578a8f475446a8190b7d.851x315x1.jpg",
//             "id": 483139,
//             "image_url": "https://images.genius.com/b6419e61d6ff5a8409def2ff33073720.959x959x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Onlap",
//             "url": "https://genius.com/artists/Onlap"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/6344787",
//           "full_title": "Numb by Hongjoong (ATEEZ)",
//           "header_image_thumbnail_url": "https://images.genius.com/ad408f03ede6f398000c2b607f04f259.300x169x1.jpg",
//           "header_image_url": "https://images.genius.com/ad408f03ede6f398000c2b607f04f259.1000x563x1.jpg",
//           "id": 6344787,
//           "lyrics_owner_id": 10919416,
//           "lyrics_state": "complete",
//           "path": "/Hongjoong-ateez-numb-lyrics",
//           "pyongs_count": 2,
//           "song_art_image_thumbnail_url": "https://images.genius.com/ad408f03ede6f398000c2b607f04f259.300x169x1.jpg",
//           "song_art_image_url": "https://images.genius.com/ad408f03ede6f398000c2b607f04f259.1000x563x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/Hongjoong-ateez-numb-lyrics",
//           "song_art_primary_color": "#a98c4d",
//           "song_art_secondary_color": "#1c544c",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1628019",
//             "header_image_url": "https://images.genius.com/d1aac9ab1aa643d51783e36b73161d4b.800x1000x1.jpg",
//             "id": 1628019,
//             "image_url": "https://images.genius.com/fba7561be1232172aa2bdcc2a10b5106.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Hongjoong (ATEEZ)",
//             "url": "https://genius.com/artists/Hongjoong-ateez"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/6446256",
//           "full_title": "Numb by Cast of Zoey’s Extraordinary Playlist (Ft. Skylar Astin)",
//           "header_image_thumbnail_url": "https://images.genius.com/99b31cb1632cf81cc8c62e02bd3c806d.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/99b31cb1632cf81cc8c62e02bd3c806d.1000x1000x1.jpg",
//           "id": 6446256,
//           "lyrics_owner_id": 4274810,
//           "lyrics_state": "complete",
//           "path": "/Cast-of-zoeys-extraordinary-playlist-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/99b31cb1632cf81cc8c62e02bd3c806d.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/99b31cb1632cf81cc8c62e02bd3c806d.1000x1000x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb (Ft. Skylar Astin)",
//           "url": "https://genius.com/Cast-of-zoeys-extraordinary-playlist-numb-lyrics",
//           "song_art_primary_color": "#df5628",
//           "song_art_secondary_color": "#6b1208",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/2111239",
//             "header_image_url": "https://images.genius.com/42f9fde3325251ac47adbef62cd35185.1000x625x1.jpg",
//             "id": 2111239,
//             "image_url": "https://images.genius.com/9aa9eeb04e001382018133cbaa7d1447.960x960x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Cast of Zoey’s Extraordinary Playlist",
//             "url": "https://genius.com/artists/Cast-of-zoeys-extraordinary-playlist"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/6543103",
//           "full_title": "Numb by Jake Adkins",
//           "header_image_thumbnail_url": "https://images.genius.com/5c58c46c7dfa8ffb6bc355b7f85bf91c.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/5c58c46c7dfa8ffb6bc355b7f85bf91c.500x500x1.jpg",
//           "id": 6543103,
//           "lyrics_owner_id": 12198725,
//           "lyrics_state": "complete",
//           "path": "/Jake-adkins-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/5c58c46c7dfa8ffb6bc355b7f85bf91c.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/5c58c46c7dfa8ffb6bc355b7f85bf91c.500x500x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/Jake-adkins-numb-lyrics",
//           "song_art_primary_color": "#d32127",
//           "song_art_secondary_color": "#8a090d",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/2062307",
//             "header_image_url": "https://images.genius.com/95c41971260fdaf0704884aa654ce1f1.299x299x1.jpg",
//             "id": 2062307,
//             "image_url": "https://images.genius.com/95c41971260fdaf0704884aa654ce1f1.299x299x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Jake Adkins",
//             "url": "https://genius.com/artists/Jake-adkins"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/6641611",
//           "full_title": "Numb by Brighter Than A Thousand Suns",
//           "header_image_thumbnail_url": "https://images.genius.com/dca0e13c0d07a4624198357bb1775b72.300x300x1.webp",
//           "header_image_url": "https://images.genius.com/dca0e13c0d07a4624198357bb1775b72.1000x1000x1.webp",
//           "id": 6641611,
//           "lyrics_owner_id": 4295053,
//           "lyrics_state": "complete",
//           "path": "/Brighter-than-a-thousand-suns-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/dca0e13c0d07a4624198357bb1775b72.300x300x1.webp",
//           "song_art_image_url": "https://images.genius.com/dca0e13c0d07a4624198357bb1775b72.1000x1000x1.webp",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/Brighter-than-a-thousand-suns-numb-lyrics",
//           "song_art_primary_color": "#E9E9E9",
//           "song_art_secondary_color": "#E9E9E9",
//           "song_art_text_color": "#000000",
//           "primary_artist": {
//             "api_path": "/artists/357133",
//             "header_image_url": "https://images.genius.com/1cf91dd52cb5f8f2173a8850b7681db3.1000x1000x1.jpg",
//             "id": 357133,
//             "image_url": "https://images.genius.com/1cf91dd52cb5f8f2173a8850b7681db3.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Brighter Than A Thousand Suns",
//             "url": "https://genius.com/artists/Brighter-than-a-thousand-suns"
//           }
//         },
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/6880869",
//           "full_title": "Numb by Divide Music",
//           "header_image_thumbnail_url": "https://images.genius.com/7de079fe449eb572d33d6ce7ecf52119.300x169x1.jpg",
//           "header_image_url": "https://images.genius.com/7de079fe449eb572d33d6ce7ecf52119.1000x563x1.jpg",
//           "id": 6880869,
//           "lyrics_owner_id": 10041052,
//           "lyrics_state": "complete",
//           "path": "/Divide-music-numb-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/01e58e9bc93f7f06ad48652d9cffdd18.300x300x1.png",
//           "song_art_image_url": "https://images.genius.com/01e58e9bc93f7f06ad48652d9cffdd18.640x640x1.png",
//           "stats": {
//             "unreviewed_annotations": 1,
//             "hot": false
//           },
//           "title": "Numb",
//           "title_with_featured": "Numb",
//           "url": "https://genius.com/Divide-music-numb-lyrics",
//           "song_art_primary_color": "#797e85",
//           "song_art_secondary_color": "#3f4145",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1432839",
//             "header_image_url": "https://images.genius.com/a7464109a9f6b7c0770f4462a0d96103.400x400x1.jpg",
//             "id": 1432839,
//             "image_url": "https://images.genius.com/a7464109a9f6b7c0770f4462a0d96103.400x400x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Divide Music",
//             "url": "https://genius.com/artists/Divide-music"
//           }
//         }
//       ]
//     },
//     {
//       "relationship_type": "remix_of",
//       "type": "remix_of",
//       "songs": []
//     },
//     {
//       "relationship_type": "remixed_by",
//       "type": "remixed_by",
//       "songs": [
//         {
//           "annotation_count": 11,
//           "api_path": "/songs/24427",
//           "full_title": "Numb / Encore by JAY-Z & Linkin Park",
//           "header_image_thumbnail_url": "https://images.genius.com/256c5eecb058d86d746e0743a30232f5.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/256c5eecb058d86d746e0743a30232f5.928x928x1.jpg",
//           "id": 24427,
//           "lyrics_owner_id": 50,
//           "lyrics_state": "complete",
//           "path": "/Jay-z-and-linkin-park-numb-encore-lyrics",
//           "pyongs_count": 28,
//           "song_art_image_thumbnail_url": "https://images.genius.com/9c6348fe907d9b0d1e94459faa882700.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/9c6348fe907d9b0d1e94459faa882700.1000x1000x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 8,
//             "concurrents": 2,
//             "hot": false,
//             "pageviews": 454414
//           },
//           "title": "Numb / Encore",
//           "title_with_featured": "Numb / Encore",
//           "url": "https://genius.com/Jay-z-and-linkin-park-numb-encore-lyrics",
//           "song_art_primary_color": "#c8610f",
//           "song_art_secondary_color": "#7a3b16",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/385596",
//             "header_image_url": "https://images.genius.com/151bb7a29730563eb9c013a598b29370.1000x563x1.jpg",
//             "id": 385596,
//             "image_url": "https://images.genius.com/7937fdbaa494974d6d02c1ebc2489b1f.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "JAY-Z & Linkin Park",
//             "url": "https://genius.com/artists/Jay-z-and-linkin-park"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/3983184",
//           "full_title": "Linkin Park - Numb (ListenToSage Remix) by ListenToSage",
//           "header_image_thumbnail_url": "https://images.genius.com/ba314232ebc73bd0be425eedd3db6025.300x300x1.png",
//           "header_image_url": "https://images.genius.com/ba314232ebc73bd0be425eedd3db6025.790x790x1.png",
//           "id": 3983184,
//           "lyrics_owner_id": 6780466,
//           "lyrics_state": "complete",
//           "path": "/Listentosage-linkin-park-numb-listentosage-remix-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/ba314232ebc73bd0be425eedd3db6025.300x300x1.png",
//           "song_art_image_url": "https://images.genius.com/ba314232ebc73bd0be425eedd3db6025.790x790x1.png",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Linkin Park - Numb (ListenToSage Remix)",
//           "title_with_featured": "Linkin Park - Numb (ListenToSage Remix)",
//           "url": "https://genius.com/Listentosage-linkin-park-numb-listentosage-remix-lyrics",
//           "song_art_primary_color": "#698cbe",
//           "song_art_secondary_color": "#0c1044",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1542393",
//             "header_image_url": "https://images.genius.com/254fdd1ffa467d57a1b40fdef7ba48cf.1000x743x1.png",
//             "id": 1542393,
//             "image_url": "https://images.genius.com/ba314232ebc73bd0be425eedd3db6025.790x790x1.png",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "ListenToSage",
//             "url": "https://genius.com/artists/Listentosage"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/4264383",
//           "full_title": "Numb (Jonaz \"Gr0nkh\" Beatz Electro Remix) by Jonaz \"Gr0nkh\" Beatz",
//           "header_image_thumbnail_url": "https://images.genius.com/ed65910eb189a851ad67b7468dccd270.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/ed65910eb189a851ad67b7468dccd270.500x500x1.jpg",
//           "id": 4264383,
//           "lyrics_owner_id": 3998702,
//           "lyrics_state": "complete",
//           "path": "/Jonaz-gr0nkh-beatz-numb-jonaz-gr0nkh-beatz-electro-remix-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/ed65910eb189a851ad67b7468dccd270.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/ed65910eb189a851ad67b7468dccd270.500x500x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb (Jonaz “Gr0nkh” Beatz Electro Remix)",
//           "title_with_featured": "Numb (Jonaz \"Gr0nkh\" Beatz Electro Remix)",
//           "url": "https://genius.com/Jonaz-gr0nkh-beatz-numb-jonaz-gr0nkh-beatz-electro-remix-lyrics",
//           "song_art_primary_color": "#da2520",
//           "song_art_secondary_color": "#651210",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1711032",
//             "header_image_url": "https://images.genius.com/7abc6aec2fe4e1e820d7bbe9a5856c56.499x499x1.jpg",
//             "id": 1711032,
//             "image_url": "https://images.genius.com/7abc6aec2fe4e1e820d7bbe9a5856c56.499x499x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "Jonaz “Gr0nkh” Beatz",
//             "url": "https://genius.com/artists/Jonaz-gr0nkh-beatz"
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/6891759",
//           "full_title": "Numb Encore by EKwesco",
//           "header_image_thumbnail_url": "https://images.genius.com/533a75fac4d9842e8dfae1779815b06f.300x300x1.jpg",
//           "header_image_url": "https://images.genius.com/533a75fac4d9842e8dfae1779815b06f.720x720x1.jpg",
//           "id": 6891759,
//           "lyrics_owner_id": 2640940,
//           "lyrics_state": "incomplete",
//           "path": "/Ekwesco-numb-encore-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/533a75fac4d9842e8dfae1779815b06f.300x300x1.jpg",
//           "song_art_image_url": "https://images.genius.com/533a75fac4d9842e8dfae1779815b06f.720x720x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb Encore",
//           "title_with_featured": "Numb Encore",
//           "url": "https://genius.com/Ekwesco-numb-encore-lyrics",
//           "song_art_primary_color": "#3171b7",
//           "song_art_secondary_color": "#2c416c",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/187853",
//             "header_image_url": "https://images.genius.com/ebfdaed6bf5625742a1005adfbca5f7c.1000x640x1.jpg",
//             "id": 187853,
//             "image_url": "https://images.genius.com/533a75fac4d9842e8dfae1779815b06f.720x720x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": false,
//             "name": "EKwesco",
//             "url": "https://genius.com/artists/Ekwesco",
//             "iq": 8152
//           }
//         }
//       ]
//     },
//     {
//       "relationship_type": "live_version_of",
//       "type": "live_version_of",
//       "songs": []
//     },
//     {
//       "relationship_type": "performed_live_as",
//       "type": "performed_live_as",
//       "songs": [
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/1942985",
//           "full_title": "Numb (Live in Texas) by Linkin Park",
//           "header_image_thumbnail_url": "https://images.genius.com/1631d1ac6488d7feffde10c9c43b3587.300x300x1.png",
//           "header_image_url": "https://images.genius.com/1631d1ac6488d7feffde10c9c43b3587.1000x1000x1.png",
//           "id": 1942985,
//           "lyrics_owner_id": 1549345,
//           "lyrics_state": "complete",
//           "path": "/Linkin-park-numb-live-in-texas-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/1631d1ac6488d7feffde10c9c43b3587.300x300x1.png",
//           "song_art_image_url": "https://images.genius.com/1631d1ac6488d7feffde10c9c43b3587.1000x1000x1.png",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb (Live in Texas)",
//           "title_with_featured": "Numb (Live in Texas)",
//           "url": "https://genius.com/Linkin-park-numb-live-in-texas-lyrics",
//           "song_art_primary_color": "#cd3d31",
//           "song_art_secondary_color": "#78241d",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1581",
//             "header_image_url": "https://images.genius.com/d0aa7a07a7213a80ca95d9da4a053fa0.1000x509x1.jpg",
//             "id": 1581,
//             "image_url": "https://images.genius.com/a865aac7693c39977b9b402dc364908e.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": true,
//             "name": "Linkin Park",
//             "url": "https://genius.com/artists/Linkin-park",
//             "iq": 1743
//           }
//         },
//         {
//           "annotation_count": 1,
//           "api_path": "/songs/2054521",
//           "full_title": "Numb (Live from New York, 2008) by Linkin Park",
//           "header_image_thumbnail_url": "https://images.genius.com/1becd3cda2013f76ba9b01707fcf194d.300x300x1.png",
//           "header_image_url": "https://images.genius.com/1becd3cda2013f76ba9b01707fcf194d.1000x1000x1.png",
//           "id": 2054521,
//           "lyrics_owner_id": 1549345,
//           "lyrics_state": "complete",
//           "path": "/Linkin-park-numb-live-from-new-york-2008-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/1becd3cda2013f76ba9b01707fcf194d.300x300x1.png",
//           "song_art_image_url": "https://images.genius.com/1becd3cda2013f76ba9b01707fcf194d.1000x1000x1.png",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb (Live from New York, 2008)",
//           "title_with_featured": "Numb (Live from New York, 2008)",
//           "url": "https://genius.com/Linkin-park-numb-live-from-new-york-2008-lyrics",
//           "song_art_primary_color": "#cc7033",
//           "song_art_secondary_color": "#140b05",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1581",
//             "header_image_url": "https://images.genius.com/d0aa7a07a7213a80ca95d9da4a053fa0.1000x509x1.jpg",
//             "id": 1581,
//             "image_url": "https://images.genius.com/a865aac7693c39977b9b402dc364908e.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": true,
//             "name": "Linkin Park",
//             "url": "https://genius.com/artists/Linkin-park",
//             "iq": 1743
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/3319837",
//           "full_title": "Numb (One More Light Live) by Linkin Park",
//           "header_image_thumbnail_url": "https://images.genius.com/d2f46e91b1ffefa62ff2bd615264c23a.300x300x1.png",
//           "header_image_url": "https://images.genius.com/d2f46e91b1ffefa62ff2bd615264c23a.1000x1000x1.png",
//           "id": 3319837,
//           "lyrics_owner_id": 1710294,
//           "lyrics_state": "complete",
//           "path": "/Linkin-park-numb-one-more-light-live-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/d2f46e91b1ffefa62ff2bd615264c23a.300x300x1.png",
//           "song_art_image_url": "https://images.genius.com/d2f46e91b1ffefa62ff2bd615264c23a.1000x1000x1.png",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb (One More Light Live)",
//           "title_with_featured": "Numb (One More Light Live)",
//           "url": "https://genius.com/Linkin-park-numb-one-more-light-live-lyrics",
//           "song_art_primary_color": "#3fbf3f",
//           "song_art_secondary_color": "#040c04",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1581",
//             "header_image_url": "https://images.genius.com/d0aa7a07a7213a80ca95d9da4a053fa0.1000x509x1.jpg",
//             "id": 1581,
//             "image_url": "https://images.genius.com/a865aac7693c39977b9b402dc364908e.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": true,
//             "name": "Linkin Park",
//             "url": "https://genius.com/artists/Linkin-park",
//             "iq": 1743
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/5869532",
//           "full_title": "Numb (Live at Milton Keynes) by Linkin Park",
//           "header_image_thumbnail_url": "https://images.genius.com/5c458ec062da0b5420b944494cda0af6.300x300x1.png",
//           "header_image_url": "https://images.genius.com/5c458ec062da0b5420b944494cda0af6.1000x1000x1.png",
//           "id": 5869532,
//           "lyrics_owner_id": 4367769,
//           "lyrics_state": "incomplete",
//           "path": "/Linkin-park-numb-live-at-milton-keynes-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/5c458ec062da0b5420b944494cda0af6.300x300x1.png",
//           "song_art_image_url": "https://images.genius.com/5c458ec062da0b5420b944494cda0af6.1000x1000x1.png",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb (Live at Milton Keynes)",
//           "title_with_featured": "Numb (Live at Milton Keynes)",
//           "url": "https://genius.com/Linkin-park-numb-live-at-milton-keynes-lyrics",
//           "song_art_primary_color": "#ac5424",
//           "song_art_secondary_color": "#6e2f18",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1581",
//             "header_image_url": "https://images.genius.com/d0aa7a07a7213a80ca95d9da4a053fa0.1000x509x1.jpg",
//             "id": 1581,
//             "image_url": "https://images.genius.com/a865aac7693c39977b9b402dc364908e.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": true,
//             "name": "Linkin Park",
//             "url": "https://genius.com/artists/Linkin-park",
//             "iq": 1743
//           }
//         },
//         {
//           "annotation_count": 0,
//           "api_path": "/songs/6757923",
//           "full_title": "Numb (Live) by Linkin Park",
//           "header_image_thumbnail_url": "https://images.genius.com/e570a97b443c4b7a1d7073147a63eee9.300x274x1.jpg",
//           "header_image_url": "https://images.genius.com/e570a97b443c4b7a1d7073147a63eee9.657x600x1.jpg",
//           "id": 6757923,
//           "lyrics_owner_id": 9794789,
//           "lyrics_state": "complete",
//           "path": "/Linkin-park-numb-live-lyrics",
//           "pyongs_count": null,
//           "song_art_image_thumbnail_url": "https://images.genius.com/e570a97b443c4b7a1d7073147a63eee9.300x274x1.jpg",
//           "song_art_image_url": "https://images.genius.com/e570a97b443c4b7a1d7073147a63eee9.657x600x1.jpg",
//           "stats": {
//             "unreviewed_annotations": 0,
//             "hot": false
//           },
//           "title": "Numb (Live)",
//           "title_with_featured": "Numb (Live)",
//           "url": "https://genius.com/Linkin-park-numb-live-lyrics",
//           "song_art_primary_color": "#f20c26",
//           "song_art_secondary_color": "#4c040c",
//           "song_art_text_color": "#fff",
//           "primary_artist": {
//             "api_path": "/artists/1581",
//             "header_image_url": "https://images.genius.com/d0aa7a07a7213a80ca95d9da4a053fa0.1000x509x1.jpg",
//             "id": 1581,
//             "image_url": "https://images.genius.com/a865aac7693c39977b9b402dc364908e.1000x1000x1.jpg",
//             "is_meme_verified": false,
//             "is_verified": true,
//             "name": "Linkin Park",
//             "url": "https://genius.com/artists/Linkin-park",
//             "iq": 1743
//           }
//         }
//       ]
//     }
//   ],
//       "verified_annotations_by": [],
//       "verified_contributors": [],
//       "verified_lyrics_by": [],
//       "writer_artists": [
//     {
//       "api_path": "/artists/271318",
//       "header_image_url": "https://images.genius.com/4734a9e0b56f985e56bafb2175f002d2.630x354x1.jpg",
//       "id": 271318,
//       "image_url": "https://images.genius.com/87da1d19cc2e2ac125aa6e81f5659418.1000x1000x1.jpg",
//       "is_meme_verified": false,
//       "is_verified": false,
//       "name": "Mr. Hahn",
//       "url": "https://genius.com/artists/Mr-hahn"
//     },
//     {
//       "api_path": "/artists/635618",
//       "header_image_url": "https://images.genius.com/44b94af7ede9ad126dfed6cca0940c5c.1000x563x1.jpg",
//       "id": 635618,
//       "image_url": "https://images.genius.com/798c8bfd9a8203bd11a71b8e51868e86.250x250x1.jpg",
//       "is_meme_verified": false,
//       "is_verified": false,
//       "name": "Dave Farrell",
//       "url": "https://genius.com/artists/Dave-farrell"
//     },
//     {
//       "api_path": "/artists/643808",
//       "header_image_url": "https://images.genius.com/22066072878e2d95bfc08a949455997d.1000x188x1.jpg",
//       "id": 643808,
//       "image_url": "https://images.genius.com/e94dd43f295dcd8bc56be0085cfef234.455x455x1.jpg",
//       "is_meme_verified": false,
//       "is_verified": false,
//       "name": "Rob Bourdon",
//       "url": "https://genius.com/artists/Rob-bourdon"
//     },
//     {
//       "api_path": "/artists/177201",
//       "header_image_url": "https://images.genius.com/03b575fa7baad98f1ddf8e8e378f2ac2.664x1000x1.jpg",
//       "id": 177201,
//       "image_url": "https://images.genius.com/ad8ed549583846634a19fd0d83db633e.265x385x1.jpg",
//       "is_meme_verified": false,
//       "is_verified": false,
//       "name": "Brad Delson",
//       "url": "https://genius.com/artists/Brad-delson"
//     },
//     {
//       "api_path": "/artists/4431",
//       "header_image_url": "https://images.genius.com/761ad8cffdfa72b5baf412210f466560.1000x380x1.jpg",
//       "id": 4431,
//       "image_url": "https://images.genius.com/67404e5ae6f42d091a1c373aa4c3fa97.1000x1000x1.png",
//       "is_meme_verified": false,
//       "is_verified": true,
//       "name": "Mike Shinoda",
//       "url": "https://genius.com/artists/Mike-shinoda",
//       "iq": 12062
//     },
//     {
//       "api_path": "/artists/1015",
//       "header_image_url": "https://images.genius.com/b6983cfc17651601b84acec5c1b3228f.1000x303x1.jpg",
//       "id": 1015,
//       "image_url": "https://images.genius.com/3853f38429e3cd0278c2b5b6307b9e92.752x752x1.jpg",
//       "is_meme_verified": false,
//       "is_verified": true,
//       "name": "Chester Bennington",
//       "url": "https://genius.com/artists/Chester-bennington",
//       "iq": 3329
//     }
//   ]
// }
// }


