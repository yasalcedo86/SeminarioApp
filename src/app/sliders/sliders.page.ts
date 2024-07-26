import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.page.html',
  styleUrls: ['./sliders.page.scss'],
})
export class SlidersPage implements OnInit {
  lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dicta obcaecati animi omnis velit laborum unde repellat, ipsa impedit possimus quae, tempore ratione placeat est. Dolore sunt perspiciatis officiis consequuntur?";
  slides: any;

  constructor( private musicService: MusicService ) { }

  ngOnInit() {
    this.musicService.getArtist().then(data => {
      this.slides = data;
      console.log(data);
    });
  }

}
