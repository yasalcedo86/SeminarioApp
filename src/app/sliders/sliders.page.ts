import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { SongModalPage } from '../song-modal/song-modal.page';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.page.html',
  styleUrls: ['./sliders.page.scss'],
})
export class SlidersPage implements OnInit {
  lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dicta obcaecati animi omnis velit laborum unde repellat, ipsa impedit possimus quae, tempore ratione placeat est. Dolore sunt perspiciatis officiis consequuntur?";
  slides: any;
  song = {
    name: 'data',
    artist: 'data',
    duration_ms: 1,
    playing: false,
    preview_url: ''
  };
  time: any;
  currentSong: any;
  progress: any;
  constructor(private musicService: MusicService, private modal: ModalController) { }

  ngOnInit() {
    this.musicService.getArtist().then(data => {
      this.slides = data;
      console.log(data);
    });
  }

  async showSong(artista: any) {
    console.log(artista);
    const songs = await this.musicService.getArtistTracks(artista.id);
    const modal = this.modal.create({
      component: SongModalPage,
      componentProps: {
        name: artista.name,
        id: artista.id,
        songs: songs
      }
    });

    (await modal).onDidDismiss().then(data => {
      this.song = data.data;
      this.time = 0; 
      this.progress = 0; 
      if (this.currentSong) {
        this.currentSong.pause();
      }
      this.currentSong = new Audio(this.song.preview_url);
    });

    modal.then((modal) => {
      modal.present();
    });
  }

  play() {
    if (!this.currentSong)
      return;

    this.currentSong.addEventListener("timeupdate", () => {
      this.formatTime(this.currentSong.currentTime);
      this.progress = (this.currentSong.currentTime / this.currentSong.duration)
    });
    this.currentSong.play();
    this.song.playing = true;
  }

  pause() {
    this.currentSong.pause();
    this.song.playing = false;
  }

  formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
    this.time = `${formattedMinutes}:${formattedSeconds}`;
  }
}
