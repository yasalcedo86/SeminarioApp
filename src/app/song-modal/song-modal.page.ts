import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-song-modal',
  templateUrl: './song-modal.page.html',
  styleUrls: ['./song-modal.page.scss'],
})
export class SongModalPage implements OnInit {
  artist_name: any;
  id: any;
  songs: any;
  constructor( private navParams: NavParams, private modal: ModalController) { }

  ngOnInit() {
    this.artist_name = this.navParams.get('name');
    this.id = this.navParams.get('id');
    this.songs = this.navParams.get('songs');
    console.log(this.songs)
  }
  
  closeModal(){
    this.modal.dismiss();
  }

  async selectSong(song:any){
    await this.modal.dismiss(song);
  }
}
