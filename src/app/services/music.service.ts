import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  url = "https://music.fly.dev";
  httpHeaders = {
    Headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  constructor(
    private http: HttpClient
  ) { }

  getArtist(){
    return fetch(`${this.url}/artists`).then(
      response => response.json()
    )
  }

  getArtistTracks(artist_id: number){
    return fetch(`${this.url}/tracks/artist/${artist_id}`).then(
      response => response.json()
    )
  }
}
